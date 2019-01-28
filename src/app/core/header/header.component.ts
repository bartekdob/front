import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  navigate(url: String): void{
    this.router.navigate([url]);
  }

  isLoggedIn(): boolean {
    //return this.authService.isLoggedIn;
    return localStorage.hasOwnProperty('token');
  }

  logout(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.authService.logout();
    this.router.navigate(["/"]);
  }
}
