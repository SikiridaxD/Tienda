import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/core/models/cart.model';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/modules/public/store/services/cart.service';

@Component({
  selector: 'app-minicard',
  templateUrl: './minicard.component.html',
  styleUrls: ['./minicard.component.scss']
})
export class MinicardComponent {
  value: number = 4;
  
  @Input()
  item!: CartItem;

  product: Product = {
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: []
  };
  title: string = '';
  category: string = '';
  description: string = '';
  imageSrc: string = '';
  price: number = 0;

  constructor(private cartService: CartService){}
  
  ngOnInit(): void {
    this.updateProduct()
  }

  removeFromCart(){
    // if ( this.cart.product.id !== undefined ){
    //   // this.cartService.removeElementById(this.cart.product.id);
    //   // this.cartService.storeInLocal();
    // }
  
  }



  updateProduct(){
    if ( this.item.product !== undefined ) {
      this.product = this.item.product
    }
  }
}
