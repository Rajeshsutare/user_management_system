import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Iuser } from '../models/interface';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<Iuser> {
  constructor(private _dataService: DataService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Iuser | Observable<Iuser> | Promise<Iuser> {
    let getproductId = route.params['userId'];
    return this._dataService.getSingleUser(getproductId);
  }
}
