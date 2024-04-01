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

  token: string = '';

  buttonState: 'initial' | 'loading' | 'success' | 'error' = 'initial';
  value: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  submit() {
    if (!this.user.valid) return;
    this.buttonState = 'loading';
    setTimeout(() => {
      if (this.user.value.username && this.user.value.password) {
        const { username } = this.user.value;
        const { password } = this.user.value;
        this.login(username, password);
      }
      if (this.buttonState === 'initial') return;
      setTimeout(()=>{this.router.navigate(['admin/products'])}, 2000)
    }, 5000);
  }

  login(username: string, password: string) {
    this.authService.authenticate(username, password).subscribe({
      //Si se reciben datos correctos se cambia el estado del botón
      complete: () => {
        this.buttonState = 'success';
      },
      //Si existe el token lo guarda en el local storage
      next: (data) =>{
        const { token } = data;
        if ( token ) this.authService.setToken(token);
      },
      //Si no se reciben  datos correctos no hay cambios en el botón
      error:    () => (this.buttonState = 'initial'),
    });
  }
}