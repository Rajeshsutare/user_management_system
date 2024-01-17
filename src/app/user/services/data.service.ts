import { Injectable } from '@angular/core';
import { Iuser } from '../models/interface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  userBaseUrl: string = `${environment.baseUrl}/post.json`;
  public userArray: Array<Iuser> = [];
  constructor(private _http: HttpClient, private _router: Router) {
    this.getAllUsers().subscribe((res) => {
      this.userArray = res;
    });
  }

  getAllUsers(): Observable<Iuser[]> {
    return this._http.get<any>(this.userBaseUrl).pipe(
      map((res: any) => {
        let userData: Array<Iuser> = [];
        this.userArray = userData;
        for (const key in res) {
          userData.push({ ...res[key], id: key });
        }
        return userData;
      })
    );
  }

  getCreatePost(post: Iuser) {
    let exists = this.userArray.find(
      (e) =>  e.phone === post.phone
    );
    if (exists) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `The User ${post.firstName} with ${ post.phone}  already Exists !!!`,
      });

      return;
    }
    return this._http.post<Iuser>(this.userBaseUrl, post);
  }

  getSingleUser(user: string) {
    let sinlgeUser: string = `${environment.baseUrl}/post/${user}.json`;
    return this._http.get<Iuser>(sinlgeUser);
  }

  getDeleteUser(id: string) {
    let deleteUser: string = `${environment.baseUrl}/post/${id}.json`;
    return this._http.delete<null>(deleteUser);
  }

  getUpdateUser(obj: Iuser) {
    let updatedUser: string = `${environment.baseUrl}/post/${obj.id}.json`;
    return this._http.patch<Iuser>(updatedUser, obj);
  }
}
