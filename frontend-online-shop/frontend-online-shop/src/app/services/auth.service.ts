// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Client } from '../../models/client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api'; // Change this to your backend URL

  constructor(private http: HttpClient) { }

  register(user: Client): Observable<Client> {
    return this.http.post<Client>(`${this.baseUrl}/register`, user).pipe(
      catchError(this.handleError)
    );
  }

  login(user: Client): Observable<Client> {
    return this.http.post<Client>(`${this.baseUrl}/login`, user, { withCredentials: true }).pipe(
      catchError(this.handleError)
    );
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, {}, { withCredentials: true }).pipe(
      catchError(this.handleError)
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError('Something bad happened; please try again later.');
  }
}
