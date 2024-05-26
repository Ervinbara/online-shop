// shared-cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../../models/cart-item';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class SharedCartService {
  private cartItems: CartItem[] = [];
  private cartItemsSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);
  private cartItemCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private cartService: CartService) {
    this.loadInitialCartItems();
  }

  private loadInitialCartItems(): void {
    this.cartService.getCartItems().subscribe(cartItems => {
      this.cartItems = cartItems;
      this.cartItemsSubject.next(this.cartItems);
      this.updateCartItemCount();
    });
  }

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
    this.updateCartItemCount();
  }

  updateCartItemQuantity(cartItem: CartItem): void {
    const existingItem = this.cartItems.find(item => item.product.id === cartItem.product.id);

    if (existingItem) {
      existingItem.quantity = cartItem.quantity;
    }

    this.cartItemsSubject.next(this.cartItems);
    this.updateCartItemCount();
  }

  getCartItemCount(): Observable<number> {
    return this.cartItemCountSubject.asObservable();
  }

  removeCartItem(cartItemId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== cartItemId);
    this.cartItemsSubject.next(this.cartItems);
    this.updateCartItemCount();
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems);
    this.cartItemCountSubject.next(0);
  }

  private updateCartItemCount(): void {
    const itemCount = this.cartItems.reduce((count, item) => count + item.quantity, 0);
    this.cartItemCountSubject.next(itemCount);
  }
}
