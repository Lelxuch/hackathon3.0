import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";

import {OrderService} from "../../../core/services/order.service";

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss']
})
export class AddProductModalComponent implements OnInit {

  form: FormGroup;
  @Input() orderId: number;

  products: any;

  constructor(public activeModal: NgbActiveModal,
              private formBuilder: FormBuilder,
              private toastrService: ToastrService,
              private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [null, [Validators.required]],
      amount: [null, [Validators.required]],
    });
    this.orderService.getProducts()
      .subscribe((res: any) => {
        this.products = res;
      }, (err: any) => {
        console.log(err);
      })
  }

  add(): void {
    let formValue = this.form.getRawValue();
    this.orderService.addProduct(this.orderId, formValue.id, formValue.amount)
      .subscribe(res => {
        this.activeModal.close(true);
      }, err => {
        if (err.status == 200) {
          this.activeModal.close(true);
          this.toastrService.success('Продукт добавлен');
        }
      })
  }
}
