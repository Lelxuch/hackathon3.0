import {Injectable} from '@angular/core';
import {UserRole} from "../models/user.model";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(
    private authService: AuthService
  ) { }

  get isSupervisor (): boolean {
    return this.authService?.currentUser?.role === UserRole.SUPERVISOR;
  }

  get isAdmin(): boolean {
    return this.authService?.currentUser?.role === UserRole.ADMIN;
  }

  get isCashier(): boolean {
    return this.authService?.currentUser?.role === UserRole.CASHIER;
  }

  getDefaultPage(): string {
    if (this.isSupervisor) {
      return 'supervisor'
    }
    if (this.isAdmin) {
      return 'admin'
    }
    if (this.isCashier) {
      return 'cashier';
    }
    return '';
  }

}
