import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {CreateUserComponent} from './pages/create-user/create-user.component';
import {UsersListComponent} from './pages/users-list/users-list.component';
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: '', redirectTo: 'user/create', pathMatch: 'full' },
  {path: 'user', children: [
    {path: 'create', component: CreateUserComponent},
    {path: 'list', component: UsersListComponent},
  ]},
]

@NgModule({
  declarations: [
    CreateUserComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class SupervisorModule { }
