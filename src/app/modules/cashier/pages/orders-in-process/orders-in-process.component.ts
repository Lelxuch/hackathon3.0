import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../../../core/services/order.service";

@Component({
  selector: 'app-orders-in-process',
  templateUrl: './orders-in-process.component.html',
  styleUrls: ['./orders-in-process.component.scss']
})
export class OrdersInProcessComponent implements OnInit {

  orders: any;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.orderService.getAllProducts()
      .subscribe(res => {
        this.orders = res;
        this.orders = this.orders.filter((x: any) => {
          return !x.completed;
        })
      }, err => {
        console.log(err);
      })
  }

}
