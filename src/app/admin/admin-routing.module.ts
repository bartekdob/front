import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {UsersListComponent} from './users-list/users-list.component';

const routes: Route[] = [
  {
    path: '',
    component: <any>AdminComponent,
    children: [
      {
        path: '',
        component: <any>AdminPanelComponent
      },
      {
        path: 'manage-users',
        component: <any>UsersListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
