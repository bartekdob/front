import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';
import {TokenStorage} from './token.storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  login = 'Alex123';
  password = 'password';
  constructor(private authService: AuthService,
          //    private token: TokenStorage,
              private router: Router) {}

  onSubmit() {
    this.authService.login(this.login, this.password).subscribe( data => {
    //  this.token.saveToken(data.token);
      localStorage.setItem('token', data.token);
      console.log(localStorage.getItem('token'));
      this.router.navigate(['hotels']);

    });
  }
}
