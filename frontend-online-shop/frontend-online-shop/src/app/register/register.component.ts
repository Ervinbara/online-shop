import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Client } from '../../models/client'; // Assurez-vous d'importer le modèle Client

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  client: Client = new Client(); // Initialisez la propriété client
  errorMessage: string = ''; // Initialisez la propriété errorMessage

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.client).subscribe({
      next: (response) => {
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.errorMessage = 'Registration failed';
      }
    });
  }
}
