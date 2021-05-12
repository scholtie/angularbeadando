import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from './list/list.component';
import {FormComponent} from './form/form.component';
import {LoginComponent} from './login/login.component';
import {LoginguardGuard} from './loginguard.guard';
import {UpdateComponent} from './update/update.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
    canActivate: [LoginguardGuard]
  },
  {
    path: 'form',
    component: FormComponent,
    canActivate: [LoginguardGuard]
  },
  {
    path: 'update',
    component: UpdateComponent,
    canActivate: [LoginguardGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
