import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

  constructor(
    private http: HttpClient,
  ) { }

  getCafe() {
    return this.http.get('/api/cafe');
  }

  register(data: any) {
    const body = {
      name: data.name,
      surname: data.surname,
      email: data.email,
      coffeeHouse: data.coffeeHouse,
      password: data.password,
      role: data.role
    }
    return this.http.post('/api/supervisor/registration', body);
  }
}
