import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from 'src/app/core/models/cart.model';
import { ProductService } from 'src/app/modules/admin/products/services/product.service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  api: string = environment.rootApi;

  private cartProducts: CartItem[] = [];
  private _cartItemsSubject: BehaviorSubject<CartItem[]> ;
  get cartItems() {
    return this._cartItemsSubject.asObservable();
  }

  constructor(private messageService:MessageService) {
    this._cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      this.cartProducts = JSON.parse(savedCartItems);
      this._cartItemsSubject.next(this.cartProducts);
    }
  }

  private updateLocalStorage(cartItems: CartItem[]): void {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  addItem(product: CartItem) {
    const currentItems = this.cartProducts;
    const existingItem = currentItems.find((i) => i.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartProducts.push(product);
    }
    this.messageService.add({ severity: 'success', summary: 'Elemento agregado correctamente', detail: product.product?.title + ' agregado al carrito.' });
    this._cartItemsSubject.next(this.cartProducts);
    this.updateLocalStorage(this.cartProducts);
  }

  removeItem(itemId: string) {
    const currentItems = this.cartProducts;
    const index = currentItems.findIndex((item) => item.id === itemId);

    if (index !== -1) {
      currentItems.splice(index, 1);
      this._cartItemsSubject.next(currentItems);
      this.updateLocalStorage(currentItems);
    }
  }

  clearCart() {
    this.cartProducts = [];
    this._cartItemsSubject.next(this.cartProducts);
    localStorage.removeItem('cartItems');
  }
}
