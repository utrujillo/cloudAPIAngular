import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserShowComponent } from './user/user-show/user-show.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'users/new', component: UserNewComponent },
  { path: 'users/:id/edit', component: UserEditComponent },
  { path: 'users/:id', component: UserShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
