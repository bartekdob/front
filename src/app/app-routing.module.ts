import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {WelcomePageComponent} from './shared/welcome-page/welcome-page.component';
import {LoginComponent} from './login/login/login.component';
import {RegisterComponent} from './login/register/register.component';
import {UserReservationsComponent} from './reservation/user-reservations/user-reservations.component';
import {AdminPanelComponent} from './admin/admin-panel/admin-panel.component';
import {HotelCreateComponent} from './hotels-management/hotel-create/hotel-create.component';
import {ManagerCanLoadGuard} from './auth/manager-can-load.guard';
import {AdminCanLoadGuard} from './auth/admin-can-load.guard';

const routes: Route[] = [
  {path: '', pathMatch: 'full', component: WelcomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'myReservations', component: UserReservationsComponent},
  {path: 'hotels', loadChildren: 'app/hotels/hotels.module#HotelsModule'},
  {path: 'manage', canLoad: [ManagerCanLoadGuard], loadChildren: 'app/hotels-management/hotels-management.module#HotelsManagementModule'},
  {path: 'admin-panel'/*, canLoad: [AdminCanLoadGuard]*/, loadChildren: 'app/admin/admin.module#AdminModule'},
  {path: '**', component: PageNotFoundComponent},
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
