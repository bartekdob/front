import { Component } from '@angular/core';
import {Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent{
  isLoading: boolean = false;

  constructor(private router: Router){}

  ngOnInit() {
    this.router.events.subscribe((routerEvent: Event)=> {
      this.checkRouterEvent(routerEvent);
    });
  }

  private checkRouterEvent(routerEvent: Event){
    if (routerEvent instanceof NavigationStart)
      this.isLoading = true;
    else if (routerEvent instanceof NavigationEnd
    || routerEvent instanceof NavigationCancel
    || routerEvent instanceof NavigationError )
      this.isLoading = false;
  }

}
