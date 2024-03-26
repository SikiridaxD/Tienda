import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { MessageService } from 'primeng/api';
import { NewProductComponent } from './components/newproduct/newproduct.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    NewProductComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
  ],
  providers:[
    MessageService
  ]
})
export class ProductsModule { }
