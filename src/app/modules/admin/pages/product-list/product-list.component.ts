import {Component, OnInit} from '@angular/core';

import {OrderService} from "../../../../core/services/order.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.orderService.getProducts()
      .subscribe((res: any) => {
        this.products = res;
        console.log(this.products);
      })
  }

}
