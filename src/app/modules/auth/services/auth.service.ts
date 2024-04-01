import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api: string = environment.rootApi;
  
  constructor(private http: HttpClient) { }
 

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logout(): void {
    localStorage.clear();
  }

  fetchData(token: string): Observable<any> {
    const headers = new HttpHeaders({'Authorization': `Bearer ${token}`});
    return this.http.get(`${this.api}/auth/me`, { headers });
  }

  isAuthenticated(): Observable<boolean> {

    const token = this.getToken();
    if (!token) {
      return of(false);
    }
  
    return this.fetchData(token).pipe(
      map(() => true), // Si la solicitud es exitosa, devuelve true
      catchError(() => of(false)) // Si hay un error, devuelve false
    )
  }
    
  authenticate(username: string, password: string, expiresInMins: number = 30): Observable<User> {
    const url = `${this.api}/auth/login`;
    const body = { username, password, expiresInMins };

    return this.http.post<any>(url, body);
  }

}
