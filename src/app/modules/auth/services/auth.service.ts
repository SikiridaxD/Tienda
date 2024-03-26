import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
 

  login(token: string): void {
    localStorage.setItem('token', token);
  }

  logout(): void {
    localStorage.clear();
  }

  isAuthenticated(): Observable<boolean> {

    if (!!localStorage.getItem('token')) return of(true);
    return of(false)
    // return of(true)
  }

}
