import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Client } from '../../models/client'; // Assurez-vous d'importer le modèle Client

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  client: Client = new Client(); // Initialisez la propriété client
  errorMessage: string = ''; // Initialisez la propriété errorMessage

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.client).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        localStorage.setItem('currentUser', JSON.stringify(response));
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.errorMessage = 'Invalid email or password';
      }
    });
  }
}
