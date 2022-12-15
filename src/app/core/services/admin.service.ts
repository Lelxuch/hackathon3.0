import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient
  ) { }

  newProduct(data: any) {
    return this.http.post('/api/products', data);
  }

  getStats() {
    return this.http.get('/api/cafe/sales');
  }
}
