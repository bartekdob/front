import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';
import {TokenStorage} from './token.storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  login: string;
  password: string;

  constructor(private authService: AuthService,
              //    private token: TokenStorage,
              private router: Router) {
  }

  onSubmit() {
    this.authService.login(this.login, this.password).subscribe(data => {
        localStorage.setItem('token', data.token);
        this.authService.isLoggedIn = true;
        localStorage.setItem('username', data.username);
        this.authService.currentUser = data.username;
        this.router.navigate(['hotels']);
    });
  }
}
