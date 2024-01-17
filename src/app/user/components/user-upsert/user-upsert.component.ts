import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from '../../validators/regex';
import { DataService } from '../../services/data.service';
import { Iuser } from '../../models/interface';
import { UtilityService } from '../../services/utility.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-upsert',
  templateUrl: './user-upsert.component.html',
  styleUrls: ['./user-upsert.component.scss'],
})
export class UserUpsertComponent implements OnInit {
  public userForm!: FormGroup;
  public userData!: Array<Iuser>;

  public uId!: string;
  public userObj!: Iuser;

  public editUserId!: string;
  public isInEditMode: boolean = false;
  constructor(
    private _dataService: DataService,
    private _utilityService: UtilityService,
    private _router: Router,
    private _routes: ActivatedRoute
  ) {
    this._routes.data.subscribe((res) => {
      this.userObj = res['userData'];
    });
  }

  ngOnInit(): void {
    this._dataService.getAllUsers().subscribe((res) => {});
    this.generateUserForm();
    this.onEditUser();
  }

  generateUserForm() {
    this.userForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [
        Validators.required,
        Validators.maxLength(30),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(CustomRegex.email),
      ]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(CustomRegex.phone),
      ]),
    });
  }

  onUserForm() {
    let obj: Iuser = {
      ...this.userForm.value,
      id: this._utilityService.generateUuid(),
    };

    return this._dataService.getCreatePost(obj)?.subscribe((res) => {
      this._router.navigate(['/']);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `New User ${obj.firstName} is Added !!!`,
        showConfirmButton: false,
        timer: 1000,
      });
      this.userForm.reset();
    });
  }

  get f() {
    return this.userForm.controls;
  }

  onEditUser() {
    this._routes.params.subscribe((params: Params) => {
      this.editUserId = params['userId'];
      if (this.editUserId) {
        this.isInEditMode = true;
        this._dataService.getSingleUser(this.editUserId).subscribe((res) => {
          this.userForm.patchValue(res);
        });
      }
    });
  }

  onUpdateUser() {
    let updatedPost = this.userForm.value;
    let uObj: Iuser = {
      ...updatedPost,
      id: this.editUserId,
    };
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `User ${uObj.firstName} is Updated Successfully !!!`,
      showConfirmButton: false,
      timer: 1000,
    });
    return this._dataService.getUpdateUser(uObj).subscribe((res) => {
      this._router.navigate(['/']);
      this.userForm.reset();
    });
  }
}
