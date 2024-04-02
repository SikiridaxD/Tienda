import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
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
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.updateProduct();
  }

  addToCart(id: string | undefined) {
    if (!id) return;
    this.cartService.addItem(id);
    this.saveProduct();
  }

  saveProduct() {
  () =>  this.messageService.add({
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
    this.value =  Math.floor(this.product.rating);
  }
}
