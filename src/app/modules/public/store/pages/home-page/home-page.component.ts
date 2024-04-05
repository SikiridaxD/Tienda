import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/modules/admin/products/services/product.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('loading', style({
        opacity: 0
      })),
      state('loaded', style({
        opacity: 1
      })),
      transition('loading => loaded', animate('300ms ease-out'))
    ])
  ]
})
export class HomePageComponent implements OnInit {

  products: Product[] = []

  constructor( 
    private productService: ProductService){}
  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.productService.getProducts().subscribe( data => {
      this.products = data
    })
  }
}
