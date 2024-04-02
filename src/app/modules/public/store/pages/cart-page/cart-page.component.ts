import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from '../../services/cart.service';
import { CartItem } from 'src/app/core/models/cart.model';

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
    ){}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe( data => this.cart = data)
    console.log( this.cart )
    this.getTotal()
  }

  getTotal(){
    if (this.cart.length === 0) return;
    for (const item of this.cart) {
      if ( item.product !== undefined) this.total += item.product.price * item.quantity;
     }
  
    return this.total;
  }
}
