import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {AuthService} from "../services/auth.service";
import { CommonModule } from "@angular/common";
import {AuthStatusService} from "../services/auth-status.service";
import {CartService} from "../services/cart.service";
import {CartItem} from "../../models/cart-item";
import {SharedCartService} from "../services/shared-cart.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatIcon,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  isLoggedIn: boolean = true;
  cartItems: CartItem[] = [];
  cartItemCount: number = 0;
  constructor(private authService: AuthService,
              private router: Router,
              private authStatusService: AuthStatusService,
              private cartService: CartService,
              private sharedCartService: SharedCartService
  )
  { }

  // ngOnInit(): void {
  //   this.authStatusService.authStatus.subscribe(status => this.isLoggedIn = status);
  //   this.isLoggedIn = this.authService.isLoggedIn(); // Initialize isLoggedIn
  //   this.sharedCartService.getCartItems().subscribe((cartItems: CartItem[]) => {
  //     this.cartItemCount = cartItems.length;
  //   });
  //   this.cartService.getCartItems().subscribe(items => {
  //     this.cartItems = items;
  //     this.updateCartItemCount();
  //   });
  // }
  ngOnInit(): void {
    this.authStatusService.authStatus.subscribe(status => this.isLoggedIn = status);
    this.isLoggedIn = this.authService.isLoggedIn(); // Initialize isLoggedIn

    this.sharedCartService.getCartItems().subscribe((cartItems: CartItem[]) => {
      this.cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
    });
  }
  updateCartItemCount(): void {
    this.cartItemCount = this.cartItems.reduce((count, item) => count + item.quantity, 0);
  }
  logout(): void {
    this.authService.logout().subscribe(() => {
      localStorage.removeItem('currentUser');
      this.isLoggedIn = false;
      this.router.navigate(['/login']);
    }, error => {
      console.error('Logout failed', error);
    });
  }
}
