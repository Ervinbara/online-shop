// logout.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private authService: AuthService, private router: Router) { }

  logout() {
    this.authService.logout().subscribe(
      response => {
        console.log('Logout successful', response);
        this.router.navigate(['/login']); // Rediriger vers la page de connexion
      },
      error => {
        console.error('Logout error', error);
      }
    );
  }
}
