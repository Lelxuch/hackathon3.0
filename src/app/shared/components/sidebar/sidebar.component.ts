import {Component, OnInit} from '@angular/core';
import {PermissionService} from "../../../core/services/permission.service";
import {AuthService} from "../../../core/services/auth.service";
import {UserRole} from "../../../core/models/user.model";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    public permissionService: PermissionService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    console.log(this.permissionService.isAdmin);
  }

  logout() {
    this.authService.logout();
  }

}
