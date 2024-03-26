import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss']
})
export class LayoutPageComponent {

  constructor(
    private router:Router,
    private authsService: AuthService){}

  logout(){
    this.authsService.logout()
    this.router.navigate(['/store/home'])
  }
}
