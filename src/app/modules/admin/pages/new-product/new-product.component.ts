import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../../../core/services/admin.service";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      costPrice: [null, [Validators.required]],
      salePrice: [null, [Validators.required]],
      category: [null, [Validators.required]],
    })
  }

  submit(): void {
    this.adminService.newProduct(this.form.getRawValue())
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
      });
  }

}
