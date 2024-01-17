import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserUpsertComponent } from './user/components/user-upsert/user-upsert.component';
import { UserListComponent } from './user/components/user-list/user-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './user/components/navbar/navbar.component'
import { InterceptorService } from './user/services/interceptor.service';
import { UserResolver } from './user/services/user.resolver';
import { DataService } from './user/services/data.service';
import { ErrorComponent } from './user/components/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    UserUpsertComponent,
    UserListComponent,
    NavbarComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,
      useClass:InterceptorService,
      multi:true
    },
    DataService,
    UserResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
