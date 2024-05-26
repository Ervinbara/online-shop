// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Client } from '../../models/client';
import { AuthStatusService } from './auth-status.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api'; // Change this to your backend URL

  constructor(private http: HttpClient, private authStatusService: AuthStatusService) {}

  register(user: Client): Observable<Client> {
    return this.http.post<Client>(`${this.baseUrl}/register`, user).pipe(
      catchError(this.handleError)
    );
  }

  login(user: Client): Observable<Client> {
    return this.http.post<Client>(`${this.baseUrl}/login`, user, { withCredentials: true }).pipe(
      tap(response => {
        localStorage.setItem('currentUser', JSON.stringify(response));
        this.authStatusService.login();
      }),
      catchError(this.handleError)
    );
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, {}, { responseType: 'text', withCredentials: true }).pipe(
      tap(() => {
        localStorage.removeItem('currentUser');
        this.authStatusService.logout(); // Notify logout
      }),
      catchError(this.handleError)
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  getCurrentUser(): Client | null {
    const userJson = localStorage.getItem('currentUser');
    return userJson ? JSON.parse(userJson) : null;
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError('Something bad happened; please try again later.');
  }
}
