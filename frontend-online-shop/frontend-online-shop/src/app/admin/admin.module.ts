import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ClientListComponentAdmin } from './client-list/client-list.component';
import { ClientDetailComponentAdmin } from './client-detail/client-detail.component';
import { ProductListComponentAdmin } from './product-list/product-list.component';
import { ProductDetailComponentAdmin } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    // ClientListComponentAdmin,
    // ClientDetailComponentAdmin,
    // ProductListComponentAdmin,
    // ProductDetailComponentAdmin
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
