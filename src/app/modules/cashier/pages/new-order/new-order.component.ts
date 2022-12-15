import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../../../core/services/order.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AddProductModalComponent} from "../../add-product-modal/add-product-modal.component";
import {DeleteModalComponent} from "../../../../shared/components/delete-modal/delete-modal.component";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {

  orderIdKey: string = "ORDER_ID";
  orderId: string | null;

  productData: any;
  cartProducts: any;

  userData: any = null;

  constructor(
    private orderService: OrderService,
    private modalService: NgbModal,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    if (!sessionStorage.getItem(this.orderIdKey)) {
      this.orderService.newOrder()
        .subscribe((res: any) => {
          this.orderId = res.id;
          this.productData = res;
          this.cartProducts = this.productData.products;
          console.log(this.cartProducts);
          sessionStorage.setItem(this.orderIdKey, JSON.stringify(res.id));
        }, err => {
          console.log(err);
        })
    } else {
      this.orderId = sessionStorage.getItem(this.orderIdKey)
      this.orderService.getOrder(this.orderId)
        .subscribe((res: any) => {
          this.productData = res;
          this.cartProducts = this.productData.products;
          if (res.client) {
            this.userData = res.client;
          }
          console.log(this.cartProducts);
        })
    }
  }

  addProduct(): void {
    const ref = this.modalService.open(AddProductModalComponent, {backdrop: 'static', keyboard: false});

    ref.componentInstance.orderId = this.orderId;

    ref.closed.subscribe((result: boolean) => {
      if (result) {
        this.getProduct();
      }
    });
  }

  delete(id: number): void {
    this.orderService.deleteProduct(this.orderId, id, 1)
      .subscribe((res: any) => {
        this.toastrService.success("Продукт успешно удален из корзины");
        this.getProduct();
      }, (err: any) => {
        if (err.status == 200) {
          this.toastrService.success("Продукт успешно удален из корзины");
          this.getProduct();
        }
      })
  }

  cancelOrder(): void {
    this.orderService.deleteOrder(this.orderId)
      .subscribe(res => {
        console.log(res);
        this.clearOrder();
        this.getProduct();
      }, err => {
        console.log(err);
        this.clearOrder();
        this.getProduct();
      })
  }

  clearOrder() {
    this.orderId = null;
    sessionStorage.removeItem(this.orderIdKey);
  }

  submitOrder() {
    this.orderService.confirmOrder(this.orderId)
      .subscribe(res => {
        console.log(res);
        this.clearOrder();
        this.getProduct();
      }, err => {
        console.log(err);
        this.clearOrder();
        this.getProduct();
      })
  }

  /* QR */
  activateUser(): void {
    this.orderService.activateUser(this.orderId, 1)
      .subscribe(res => {
        this.userData = res;
      }, err => {
        console.log(err);
      })
  }
}
