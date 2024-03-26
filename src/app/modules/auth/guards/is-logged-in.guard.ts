import { inject } from '@angular/core';
import {
  CanMatchFn,
  Router,
} from '@angular/router';
import { map, take, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authGuard: CanMatchFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router)

  return authService.isAuthenticated().pipe(
    take(1),
    tap( (isLogged) => (isLogged ? true : router.navigate(['/login'])  ) )
  )
}

export const authGuard2: CanMatchFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router)

  return authService.isAuthenticated().pipe(
    take(1),
    tap( (isLogged) => (isLogged ? router.navigate(['/store/home']) : true ) ),
    map( isLogged => !isLogged)
  )
}

