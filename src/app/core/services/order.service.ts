import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get('/api/order/1/cafe');
  }

  newOrder() {
    const emptyJson = {};
    return this.http.post('/api/order/1/', emptyJson);
  }

  getOrder(id: string | null) {
    return this.http.get(`/api/order/${id}`);
  }

  confirmOrder(orderId: string | null) {
    return this.http.post(`/api/order/${orderId}/client`, {});
  }

  deleteOrder(orderId: string | null) {
    return this.http.delete(`/api/order/${orderId}`);
  }

  getProducts() {
    return this.http.get('/api/products');
  }

  addProduct(orderId: number, productId: number, amount: number) {
    return this.http.post(`/api/order/${orderId}/products/${productId}/${amount}`, {});
  }

  deleteProduct(orderId: string | null, productId: number, amount: number) {
    return this.http.put(`/api/order/${orderId}/products/${productId}/${amount}`, {});
  }

  activateUser(orderId: string | null, userId: number) {
    return this.http.post(`/api/order/${orderId}/client/${userId}`, {});
  }

}
