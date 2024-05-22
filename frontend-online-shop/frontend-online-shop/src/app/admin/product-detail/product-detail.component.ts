import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponentAdmin implements OnInit {
  product: Product = new Product();
  isNewProduct: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === 'new') {
      this.isNewProduct = true;
      this.product = new Product(); // Initialiser un nouveau produit
    } else if (id && !isNaN(+id)) {
      this.isNewProduct = false;
      this.productService.getProduct(+id).subscribe(product => this.product = product);
    } else {
      // Gestion du cas où l'ID est invalide ou non trouvé
      console.error('Invalid product ID');
      this.router.navigate(['/admin/products']);
    }
  }
  saveProduct(): void {
    console.log('Saving product:', this.product);
    if (this.isNewProduct) {
      this.productService.createProduct(this.product).subscribe(
        () => {
          console.log('Product created successfully');
          this.router.navigate(['/admin/products']);
        },
        error => {
          console.error('Error creating product:', error);
        }
      );
    } else {
      this.productService.updateProduct(this.product.id, this.product).subscribe(
        () => {
          console.log('Product updated successfully');
          this.router.navigate(['/admin/products']);
        },
        error => {
          console.error('Error updating product:', error);
        }
      );
    }
  }
}
