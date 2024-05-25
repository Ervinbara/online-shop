import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStatusService {
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());
  authStatus = this.loggedIn.asObservable();

  private hasToken(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  login() {
    this.loggedIn.next(true);
  }

  logout() {
    this.loggedIn.next(false);
  }
}
