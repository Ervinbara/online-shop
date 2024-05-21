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

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    HomePageComponent
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
        ButtonModule

    ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ProductListComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Ajoutez CUSTOM_ELEMENTS_SCHEMA ici
})
export class AppModule { }
