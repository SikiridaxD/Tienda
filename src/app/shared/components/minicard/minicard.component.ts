import { Component, Input } from '@angular/core';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { CartItem } from 'src/app/core/models/cart.model';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/modules/admin/products/services/product.service';
import { CartService } from 'src/app/modules/public/store/services/cart.service';

@Component({
  selector: 'app-minicard',
  templateUrl: './minicard.component.html',
  styleUrls: ['./minicard.component.scss'],
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
    images: [],
  };

  title: string = '';
  category: string = '';
  description: string = '';
  imageSrc: string = '';
  price: number = 0;

  quantity: number = 1;

  constructor(
    private cartService: CartService,
    private confirmationService: ConfirmationService,
    private productService: ProductService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.updateProduct();
  }

  removeFromCart() {
    this.cartService.removeItem(this.product.id!.toString())
  }

  updateProduct() {
    this.productService
      .getProductById(this.item.id)
      .subscribe((product) => (this.product = product));
  }

  confirm1() {
    this.confirmationService.confirm({
      header: 'Remove product...',
      message: 'Do you want to remove this product from your cart?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Product removed',
        });
        this.removeFromCart();
      }
    });
  }


}
