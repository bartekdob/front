import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {WelcomePageComponent} from './shared/welcome-page/welcome-page.component';
import {LoginComponent} from './login/login/login.component';

const routes: Route[] = [
  {path: '', pathMatch: 'full', component: WelcomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'hotels', loadChildren: 'app/hotels/hotels.module#HotelsModule'},
  {path: '**', component: PageNotFoundComponent}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
