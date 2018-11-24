import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.less']
})
export class WelcomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  asd(url: String){
    this.router.navigate([url]);
  }

}
