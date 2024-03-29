import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  user = this.formBuilder.group({
    /**
     * username: atuny0
     * password: 9uQFF1Lh
     */
    username: ['atuny0', [Validators.required, Validators.minLength(4)]],
    password: ['9uQFF1Lh', [Validators.required, Validators.minLength(4)]],
  });

  buttonState: 'initial' | 'loading' | 'success' | 'error' = 'initial';
  value: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  login2() {
    this.authService.login('token');
    this.router.navigate(['admin/products']);
  }

  submit() {
    if (!this.user.valid) return;
    this.buttonState = 'loading';
    setTimeout(() => {
      if (this.user.value.username && this.user.value.password) {
        const username: string = this.user.value.username;
        const password: string = this.user.value.password;
        this.login(username, password);
      }
      if (this.buttonState === 'initial') return;
      setTimeout(()=>{this.router.navigate(['admin/products'])}, 2000)
    }, 5000);

  }

  login(username: string, password: string) {
    this.authService.authenticate(username, password).subscribe({
      complete: () => {
        this.buttonState = 'success';
        this.authService.login('token');
      },
      error:    () => (this.buttonState = 'initial'),

      /**
       * Implementar metdod con Token recibido de dummyJson
       */
      // console.log(data)
    });
  }
}