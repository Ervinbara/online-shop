import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardModule} from "@angular/material/card"; // Importez le RouterModule
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {MatButton} from "@angular/material/button"; // Importez ProductDetailComponent

@NgModule({
  declarations: [
    // AppComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    //AppRoutingModule,
    HttpClientModule,
    RouterModule,
    MatCard, MatCardModule,
    MatCardHeader,
    MatCardContent,
    MatCardActions, MatButton,
  ],
  providers: [],
  exports: [
    ProductListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
