import { Component, OnInit } from '@angular/core';
import { LoaderService } from './user/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  title = 'userManagementSystem';
  public isLoading : boolean =false;
  constructor(private _loadderService:LoaderService){}
  ngOnInit(): void {
      this._loadderService.loadingStatus
  .subscribe(res=>{
    this.isLoading=res;
  })
  }
}
