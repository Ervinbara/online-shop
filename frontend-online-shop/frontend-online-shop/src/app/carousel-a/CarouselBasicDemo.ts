import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../../models/product';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from '../services/cart.service';
import { CartItem } from '../../models/cart-item';
import { CommonModule } from '@angular/common';
import { SharedCartService } from '../services/shared-cart.service';

@Component({
  selector: 'carousel-basic-demo',
  templateUrl: './carousel-basic-demo.html',
  styleUrls: ['./carousel-basic.component.css'],
  standalone: true,
  imports: [CommonModule, CarouselModule, ButtonModule, TagModule, MatIconModule, MatButtonModule],
  providers: [ProductService]
})
export class CarouselBasicDemo implements OnInit {
  products: Product[] = [];
  responsiveOptions: any[] | undefined;

  constructor(private productService: ProductService, private cartService: CartService, private sharedCartService: SharedCartService) {}

  ngOnInit() {
    this.productService.getLastProducts().subscribe((products) => {
      this.products = products;
    });

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  addToCart(product: Product): void {
    const cartItem: CartItem = {
      id: 0, // l'ID sera généré par le backend
      product: product,
      quantity: 1
    };

    this.cartService.addCartItem(cartItem).subscribe(() => {
      alert('Produit ajouté au panier');
      this.sharedCartService.addCartItem(cartItem);
    });
  }
}
