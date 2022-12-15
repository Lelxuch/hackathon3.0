import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {OrdersHistoryComponent} from './pages/orders-history/orders-history.component';
import {NewOrderComponent} from './pages/new-order/new-order.component';
import { OrdersInProcessComponent } from './pages/orders-in-process/orders-in-process.component';
import { AddProductModalComponent } from './add-product-modal/add-product-modal.component';
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: '', redirectTo: 'order/history', pathMatch: 'full' },
  {path: 'order', children: [
    {path: 'history', component: OrdersHistoryComponent},
    {path: 'process', component: OrdersInProcessComponent},
    {path: 'new', component: NewOrderComponent},
  ]},
];

@NgModule({
  declarations: [
    OrdersHistoryComponent,
    NewOrderComponent,
    OrdersInProcessComponent,
    AddProductModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class CashierModule { }
