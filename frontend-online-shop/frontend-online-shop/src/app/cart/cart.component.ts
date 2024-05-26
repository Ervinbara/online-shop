import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../../models/cart-item';
import { SharedCartService } from '../services/shared-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  cartItemCount: number = 0;

  constructor(private cartService: CartService, private sharedCartService: SharedCartService) { }

  ngOnInit(): void {
    this.sharedCartService.getCartItems().subscribe(cartItems => {
      this.cartItems = cartItems;
      this.updateCartItemCount();
    });

    this.sharedCartService.getCartItemCount().subscribe(count => {
      this.cartItemCount = count;
    });
  }

  removeFromCart(cartItem: CartItem): void {
    this.cartService.deleteCartItem(cartItem.id).subscribe(() => {
      this.sharedCartService.removeCartItem(cartItem.id);
    });
  }

  updateCartItem(cartItem: CartItem): void {
    this.cartService.addCartItem(cartItem).subscribe(() => {
      this.sharedCartService.addCartItem(cartItem);
    });
  }

  updateCartItemCount(): void {
    this.cartItemCount = this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }
}
