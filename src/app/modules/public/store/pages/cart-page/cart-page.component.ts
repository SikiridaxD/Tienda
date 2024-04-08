import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from '../../services/cart.service';
import { CartItem } from 'src/app/core/models/cart.model';
import { ProductService } from 'src/app/modules/admin/products/services/product.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  products: Product[] = []

  total: number = 0;

  cart: CartItem[] = []

  constructor( 
    private cartService: CartService,
    private productService: ProductService, 
    ){}

  ngOnInit() {
    this.cartService.cartItems.subscribe( data => {
      this.cart = data
    })
    this.addProductDetail()
    console.log( this.cart )
    this.getTotal()
  }

  getTotal():number {
    if (this.cart.length === 0) return 0;

    let total =0;
    for (const item of this.cart) {
      if ( item.product !== undefined) 
      total += item.product.price * item.quantity;
     }  
    return total;
  }

  clearCart(){
    this.cartService.clearCart()
  }

  addProductDetail(){
    for ( let item of this.cart){
      this.productService.getProductById(item.id).subscribe( product => item.product = product)
    }
  }
}

