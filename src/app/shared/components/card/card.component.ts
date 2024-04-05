import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CartItem } from 'src/app/core/models/cart.model';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/modules/public/store/services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  value: number = 0;


  @Input()
  product!: Product;

  title: string = '';
  category: string = '';
  description: string = '';
  imageSrc: string = '';
  price: number = 0;

  constructor(
    private cartService: CartService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.updateProduct();
  }

  addToCart() {
    if (this.product.id !== undefined) {
      const newItem: CartItem = {
        id: this.product.id.toString(),
        product: this.product,
        quantity: 1,
      };
      this.cartService.addItem(newItem);
    }
  }

  saveProduct() {
    () =>
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Product added to cart',
      });
  }

  updateProduct() {
    this.title = this.product.title;
    this.category = this.product.category;
    this.description = this.product.description;
    this.imageSrc = this.product.images[0];
    this.price = this.product.price;
    this.value = Math.floor(this.product.rating);
  }
}
