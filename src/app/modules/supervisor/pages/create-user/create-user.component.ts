import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SupervisorService} from "../../../../core/services/supervisor.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  form: FormGroup;
  roles: any = [
    {
      value: 'SUPERVISOR',
      name: 'Супервизор'
    },
    {
      value: 'ADMIN',
      name: 'Админ'
    },
    {
      value: 'CASHIER',
      name: 'Кассир'
    },
  ]
  cafes: any;

  constructor(
    private formBuilder: FormBuilder,
    private supervisorService: SupervisorService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      surname: [null, [Validators.required]],
      role: [null, [Validators.required]],
      coffeeHouse: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      repPassword: [null, [Validators.required]],
    })
    this.supervisorService.getCafe()
      .subscribe(res => {
        this.cafes = res;
      })
  }

  submit() {
    this.supervisorService.register(this.form.getRawValue())
      .subscribe(res => {
        this.toastrService.success("Пользователь создан");
        this.form.reset();
      }, err => {
        if (err.status) {
          this.toastrService.success("Пользователь создан");
          this.form.reset();
        }
      })
  }

}
