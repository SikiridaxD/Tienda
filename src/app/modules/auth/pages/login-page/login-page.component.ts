import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{
  
  constructor(
    private router: Router,
    private authService: AuthService){}

  ngOnInit(): void {
    console.log(this.authService.isAuthenticated())
  }

  login(){
    this.authService.login('token')
    this.router.navigate(['admin/products'])
  }

}
