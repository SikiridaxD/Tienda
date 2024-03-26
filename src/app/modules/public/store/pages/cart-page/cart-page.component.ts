import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/core/models/cart.model';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/modules/admin/products/services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit{
  products: Product[] = []

  cart: Cart[] = [];
  total: number = 0;


  constructor( 
    private cartService: CartService,
    private productService: ProductService,
    ){}


  ngOnInit(): void {
    this.getProducts()
    this.cart = this.cartService.cart;
    this.getTotal()
  }

  getProducts(){
    this.productService.getProducts().subscribe( data => {
      this.products = data
    })
  }

  getTotal(){
    if (this.cart.length === 0) return;
    for (const item of this.cart) {
      this.total += item.product.price * item.quantity;
    }
  
    return this.total;
  }
}
