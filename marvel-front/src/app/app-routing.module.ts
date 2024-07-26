import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { authGuard } from './core/guards/auth.guard';
import { noAuthGuard } from './core/guards/no-auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-public',
    pathMatch: 'full'
  },
  {
    path: 'home-public',
    component: PublicComponent,
    canActivate: [noAuthGuard],
  },
  {
    path: '',
    component: PrivateComponent,
    loadChildren: () => import('./private/private.module').then(m => m.PrivateModule),
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
