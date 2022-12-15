import {Component, OnInit} from '@angular/core';

import {OrderService} from "../../../../core/services/order.service";
import {SupervisorService} from "../../../../core/services/supervisor.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  cafes: any;

  constructor(
    private orderService: OrderService,
    private supervisorService: SupervisorService
  ) { }

  ngOnInit(): void {
    this.supervisorService.getCafe()
      .subscribe(res => {
        this.cafes = res;
      }, err => {
        console.log(err);
      })
  }

}
