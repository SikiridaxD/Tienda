import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/core/services/validator.service';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.scss'],
})
export class NewProductComponent implements OnInit {
  product!: Product;
  categories: string[] = [];

  productForm = this.formBuilder.group({
    id: [0],
    title: [
      '',
      [Validators.required, this.vs.noWhitespace, Validators.minLength(4)],
    ],
    category: ['', Validators.required],
    brand: [
      '',
      [Validators.required, Validators.minLength(2), this.vs.noWhitespace],
    ],
    price: [0, [Validators.required, Validators.min(1)]],
    description: [''],
  });

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private vs: ValidatorService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getProduct(id: string) {
    this.productService.getProductById(id).subscribe((data) => {
      this.product = data;
    });
  }

  getCategories() {
    this.productService
      .getCategories()
      .subscribe((data) => (this.categories = data));
  }

  saveProduct() {
    //Validamos que el formulario cumpla los requisitos
    if (!this.productForm.valid) {
      this.messageService.add({
        severity: 'error',
        summary: 'error',
        detail: 'Invalid form, check validations',
      });
      return;
    }

    //Realizamos la peticion de update al servidor
    let product: Product = this.productForm.value as Product;
    this.productService.newProduct(product).subscribe({
      next: (data) => {
        console.log(data);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Product saved correctly',
        });
      },
    });
  }
}
