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

  private username: String;

  ngOnInit() {
  }

  navigate(url: String): void{
    this.router.navigate([url]);
  }

  isLoggedIn(): boolean {
    if(localStorage.hasOwnProperty('token'))
    {
      this.username = this.authService.currentUser;
      return true;
    }
    return false;
  }

  logout(): void{
    this.username = '';
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
