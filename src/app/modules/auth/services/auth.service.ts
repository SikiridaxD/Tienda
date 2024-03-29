import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
 

  login(token: string): void {
    localStorage.setItem('token', token);
  }

  logout(): void {
    localStorage.clear();
  }

  isAuthenticated(): Observable<boolean> {

    if (!!localStorage.getItem('token')) return of(true);
    return of(false)
  }

  authenticate(username: string, password: string, expiresInMins: number = 30): Observable<any> {
    const url = 'https://dummyjson.com/auth/login';
    const body = { username, password, expiresInMins };

    return this.http.post<any>(url, body);
  }

}
