import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state): boolean => {
  const authService = inject(AuthService);
  const router = inject(Router);

  console.log('Guard')
  console.log('authService', authService.isLoggedIn)
  if (authService.isLoggedIn) {
    return authService.isLoggedIn
  }

  router.navigate(['/login'])
  return false;
};
