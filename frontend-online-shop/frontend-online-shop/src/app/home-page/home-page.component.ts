import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../../models/product";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
  lastProducts: Product[] = [];
  responsiveOptions: any;

  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit() : void {
    this.getLastProducts();
  }

  getLastProducts(): void {
    this.productService.getLastProducts()
      .subscribe(products => this.lastProducts = products);
  }

  goToProductDetail(productId: number): void {
    this.router.navigate(['/products', productId]);
  }

}
