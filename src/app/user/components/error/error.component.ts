import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  public msgError !:any;
  constructor(private _routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.msgError = this._routes.snapshot.data['msg']
  }

}
