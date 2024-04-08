import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { MessageService } from 'primeng/api';
import { CartService } from './services/cart.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ResultsPageComponent } from './pages/results-page/results-page.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
    HomePageComponent,
    ProductPageComponent,
    CartPageComponent,
    ResultsPageComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SharedModule,
  ],
  providers:[
    CartService,
    MessageService,
    
  ]
})
export class StoreModule { }
