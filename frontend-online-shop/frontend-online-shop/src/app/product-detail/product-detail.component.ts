import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null; // Initialisez product à null ou utilisez un point d'interrogation pour indiquer qu'il peut être nul

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const productId = +id;
      this.productService.getProductById(productId)
        .subscribe(product => this.product = product);
    } else {
      // Gérer le cas où l'ID est null
    }
  }
}
