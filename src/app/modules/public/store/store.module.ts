import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [
    LayoutPageComponent,
    HomePageComponent,
    ProductPageComponent,
    CartPageComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SharedModule,
  ],
  providers:[
    MessageService
  ]
})
export class StoreModule { }
