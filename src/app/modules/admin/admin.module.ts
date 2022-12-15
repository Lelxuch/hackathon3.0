import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatsComponent} from './pages/stats/stats.component';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

import {ProductListComponent} from './pages/product-list/product-list.component';
import {NewProductComponent} from './pages/new-product/new-product.component';

const routes: Routes = [
  {path: '', redirectTo: 'stats', pathMatch: 'full' },
  {path: 'stats', component: StatsComponent},
  {path: 'product', children: [
      {path: 'list', component: ProductListComponent},
      {path: 'new', component: NewProductComponent}
  ]},
];

@NgModule({
  declarations: [
    StatsComponent,
    ProductListComponent,
    NewProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
