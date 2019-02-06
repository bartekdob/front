import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import {UserDetails} from '../models/UserDetails';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.less']
})
export class AdminPanelComponent implements OnInit {

  userDetails: UserDetails[];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.loadUserDetails();
  }

  loadUserDetails(): void {
    this.adminService.getAllUsers().subscribe(details=> this.userDetails = details)
  }

}
