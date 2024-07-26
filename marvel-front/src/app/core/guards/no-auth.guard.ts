import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const user = JSON.parse(localStorage.getItem('user')!);
  const router = inject(Router);

  if (!user) {
    return true;
  } else {
    router.navigate(['/home']);
    return false;
  }
};
