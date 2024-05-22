import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "../../models/product";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent{
  lastProducts: Product[] = [];
  constructor(private productService: ProductService,private router: Router) { }

  // ngOnInit() : void {
  //   this.productService.getLastProducts()
  //     .subscribe(products => this.lastProducts = products);
  // }

  goToProductDetail(productId: number): void {
    this.router.navigate(['/products', productId]);
  }

}
