import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class SharedCartService {
  private cartItems: CartItem[] = [];
  private cartItemsSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);

  constructor() {}

  getCartItems(): Observable<CartItem[]> {
    return this.cartItemsSubject.asObservable();
  }

  addCartItem(cartItem: CartItem): void {
    const existingItem = this.cartItems.find(item => item.product.id === cartItem.product.id);

    if (existingItem) {
      existingItem.quantity += cartItem.quantity;
    } else {
      this.cartItems.push(cartItem);
    }

    this.cartItemsSubject.next(this.cartItems);
  }

  getCartItemCount(): number {
    return this.cartItems.reduce((count, item) => count + item.quantity, 0);
  }
}
