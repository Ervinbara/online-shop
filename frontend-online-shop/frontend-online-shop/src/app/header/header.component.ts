import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {AuthService} from "../services/auth.service";
import { CommonModule } from "@angular/common";
import {AuthStatusService} from "../services/auth-status.service";

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

  constructor(private authService: AuthService, private router: Router,  private authStatusService: AuthStatusService,)
  { }

  ngOnInit(): void {
    this.authStatusService.authStatus.subscribe(status => this.isLoggedIn = status);
    this.isLoggedIn = this.authService.isLoggedIn(); // Initialize isLoggedIn
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
