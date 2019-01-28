import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  email = new FormControl('', [Validators.required, Validators.email]);
  lastName = new FormControl('', [Validators.minLength(3)]);
  hide = true;
  userForm: FormGroup;

  ngOnInit(){
    this.userForm = this.buildRegisterForm();
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'wprowadź wartość - pole obowiązkowe' :
      this.email.hasError('email') ? 'nieprawidłowy adres email' :
        '';
  }

  buildRegisterForm() {
    return this.formBuilder.group(
      {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        email: ''
      });
  }


  register(): void {
    const formData = Object.assign({}, this.userForm.value);
    this.authService.register(formData).subscribe(res => {
      if (res.hasOwnProperty('message')){
      window.alert(res.message);
    } else {
      localStorage.setItem('token', res.token);
      localStorage.setItem('username', res.username);
      this.router.navigate(['/hotels']);
    }});
  }
}
