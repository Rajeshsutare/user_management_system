import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserUpsertComponent } from './user/components/user-upsert/user-upsert.component';
import { UserListComponent } from './user/components/user-list/user-list.component';
import { UserResolver } from './user/services/user.resolver';
import { ErrorComponent } from './user/components/error/error.component';

const routes: Routes = [
  {
    path : "", component:UserListComponent, 
  },
  {
    path : "users/addUser", component:UserUpsertComponent,
  },
  {
    path : "users/:userId/editUser", component:UserUpsertComponent,
    resolve :{userData : UserResolver} 
  },
  {
    path:'Page Not Found', component:ErrorComponent,
    title:'Page Not Found',
    data:{
      msg:'Page Not Found!!!'
    }  
  },
  {
    path:'**',
    redirectTo:'Page Not Found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
