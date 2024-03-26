import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard, authGuard2 } from './modules/auth/guards/is-logged-in.guard';


const routes: Routes = [
  {
    path: 'admin',
    loadChildren: ()=> import('./modules/admin/products/products.module').then(m => m.ProductsModule),
    canMatch: [authGuard]
  },
  {
    path: 'store',
    loadChildren: ()=> import('./modules/public/store/store.module').then(m => m.StoreModule),
  },
  {
    path: 'login',
    loadChildren: ()=> import('./modules/auth/auth.module').then(m => m.AuthModule),
    canMatch: [authGuard2]
  },
  {
    path: '**',
    redirectTo: 'store/home'
  }


]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
