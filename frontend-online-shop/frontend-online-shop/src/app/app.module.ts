import { CommonModule } from "@angular/common";

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { ProductListComponent } from './product-list/product-list.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {Carousel02Component} from "./carousel-a/carousel-a.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {CarouselBasicDemo} from "./carousel-a/CarouselBasicDemo"; // Importez le module NgbModule si vous utilisez NgbCarouselModule
import { ButtonModule } from 'primeng/button';
import {ProductDetailComponentAdmin} from "./admin/product-detail/product-detail.component";
import {ProductListComponentAdmin} from "./admin/product-list/product-list.component";
import {ClientListComponentAdmin} from "./admin/client-list/client-list.component";
import {ClientDetailComponentAdmin} from "./admin/client-detail/client-detail.component";
import {HeaderComponent} from "./header/header.component";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";
import {SidebarComponent} from "./admin/sidebar/sidebar.component";

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    HomePageComponent,
    ProductDetailComponentAdmin,
    ProductListComponentAdmin,
    ClientListComponentAdmin,
    ClientDetailComponentAdmin,
    DashboardComponent,
    SidebarComponent
  ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        MatCardModule,
        MatButtonModule,
        FormsModule,
        NgbModule,
        Carousel02Component,
        CarouselBasicDemo,
        ButtonModule,
        HeaderComponent
    ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ProductListComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Ajoutez CUSTOM_ELEMENTS_SCHEMA ici
})
export class AppModule { }
