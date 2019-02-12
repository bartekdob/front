import { Component, OnInit } from '@angular/core';
import {UserDetails} from '../models/UserDetails';
import {AdminService} from '../admin.service';
import {Role} from '../models/Role';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.less']
})
export class UsersListComponent implements OnInit {

  userDetails: UserDetails[];
  roles: Role[];
  roleForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private adminService: AdminService) {
  }

  ngOnInit() {
    this.loadRoles();
    this.loadUserDetails();
    this.buildRoleForm();
  }

  loadUserDetails(): void {
    this.adminService.getAllUsers().subscribe(details => this.userDetails = details);
  }

  loadRoles(): void {
    this.adminService.getRoles().subscribe( roles => this.roles = roles);
  }

  buildRoleForm() {
    return this.formBuilder.group(
      {
        addRole: new FormControl(),
        removeRole: new FormControl()
      }
    )
  }

    userIsManager(user: UserDetails): boolean {
      user.roles.forEach(role =>{
        if(role.name == 'MANAGER')
          return true;
      })
      return false;
    }

    deleteUser(user: UserDetails) {
    this.adminService.deleteUser(user.id).then( ()=>
      this.loadUserDetails()
    );
  }

}
