import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../models/interface';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  public userInfo!: Array<Iuser>;

  constructor(
    private _dataService: DataService,
    private _routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._dataService.getAllUsers().subscribe((res) => {
      this.userInfo = res;
    });
  }

  ondeleteUser(id: string) {
    document.getElementById(id)?.remove();
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'User has been deleted.',
          icon: 'success',
        });
      }
      return this._dataService.getDeleteUser(id).subscribe((res) => {});
    });
  }
}
