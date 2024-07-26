import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user = JSON.parse(localStorage.getItem('user')!);
  if (user) {
    return true;
  } else {
    localStorage.removeItem('user');
    router.navigate(['/home-public']);
    return false;
  }
};
