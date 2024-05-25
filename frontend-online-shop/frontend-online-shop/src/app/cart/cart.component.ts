import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(cartItems => {
      this.cartItems = cartItems;
    });
  }

  removeFromCart(cartItem: CartItem): void {
    this.cartService.deleteCartItem(cartItem.id).subscribe(() => {
      this.cartItems = this.cartItems.filter(item => item.id !== cartItem.id);
    });
  }
}
