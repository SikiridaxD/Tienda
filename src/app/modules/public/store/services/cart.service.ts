import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from 'src/app/core/models/cart.model';
import { ProductService } from 'src/app/modules/admin/products/services/product.service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  api: string = environment.rootApi;
  
  private cartItemsSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor(private productService: ProductService) {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      const parsedCartItems = JSON.parse(savedCartItems);
      this.addProductDetails(parsedCartItems);
      this.cartItemsSubject.next(parsedCartItems);
    }
  }

  private addProductDetails(cartItems: any[]) {
    cartItems.forEach(item => {
      if (!item.product) {
        this.productService.getProductById(item.id).subscribe(product => {
          item.product = product; // Agregar el producto al elemento del carrito
        });
      }
    });
  }

  private updateLocalStorage(cartItems: CartItem[]): void {
    localStorage.setItem('cartItems', JSON.stringify(cartItems.map(item => ({
      id: item.id,
      quantity: item.quantity
    }))));
  }

  addItem(id: string) {
    const currentItems = this.cartItemsSubject.getValue();
    const existingItem = currentItems.find(i => i.id === id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      let product
      this.productService.getProductById(id).subscribe( data => product = data )
      currentItems.push({ 
        id: id,
        product: product, 
        quantity: 1 });
    }

    this.cartItemsSubject.next(currentItems);
    this.updateLocalStorage(currentItems);
  }

  removeItem(itemId: string) {
    const currentItems = this.cartItemsSubject.getValue();
    const index = currentItems.findIndex(item => item.id === itemId);

    if (index !== -1) {
      currentItems.splice(index, 1);
      this.cartItemsSubject.next(currentItems);
      this.updateLocalStorage(currentItems);
    }
  }

  clearCart() {
    this.cartItemsSubject.next([]);
    localStorage.removeItem('cartItems');
  }
}
