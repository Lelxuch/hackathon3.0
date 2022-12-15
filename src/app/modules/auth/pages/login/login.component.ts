import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

import {AuthService} from "../../../../core/services/auth.service";
import {PermissionService} from "../../../../core/services/permission.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLoggedin: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private authService: AuthService,
    private permissionService: PermissionService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  logout(): void {
  }

  login(): void {
    this.authService.login(this.loginForm.getRawValue())
      .subscribe((res: any) => {
        this.router.navigateByUrl(this.permissionService.getDefaultPage());
      }, (err: any) => {
        console.log(err);
        this.toastrService.error('Data entered is incorrect');
      })
  }

}
