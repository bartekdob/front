import { Injectable } from '@angular/core';
import {CanLoad, Route, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerCanLoadGuard implements CanLoad {

  constructor(private authService: AuthService, private  router: Router){

  }

  canLoad(
    route: Route): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.isLoggedIn && this.authService.roles.find(value => value == 'MANAGER'))
      return true;
    else
      return false;
  }
}
