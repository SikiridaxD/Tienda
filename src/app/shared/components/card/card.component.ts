import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/modules/admin/products/services/product.service';
import { CartService } from 'src/app/modules/public/store/services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  value: number = 4;

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
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.updateProduct();
  }

  addToCart(id: string | undefined) {
    if (!id) return;
    this.cartService.storeInCart(id);
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
  }

  getProduct() {
    return this.productService.getProductById('5').subscribe((data) => {
      this.product = data;
      this.title = this.product.title;
      this.category = this.product.category;
      this.description = this.product.description;
      this.imageSrc = this.product.images[0];
      this.price = this.product.price;
    });
  }
}
