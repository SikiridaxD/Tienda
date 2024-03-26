import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/core/models/product.model';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/core/services/validator.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product!: Product;
  categories: string[] = [];
  images: any[] = [];

  productForm = this.formBuilder.group({
    id: [0],
    title: ['',  [Validators.required, this.vs.noWhitespace, Validators.minLength(4)]],
    category: ['', Validators.required],
    brand: ['',[Validators.required, Validators.minLength(2), this.vs.noWhitespace]],
    price: [0, [Validators.required, Validators.min(1)]],
    description: [''],
  });

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private vs: ValidatorService,
    private messageService: MessageService
  ) {}

  initializeForm() {
    this.productForm.patchValue(this.product);
  }

  ngOnInit(): void {
    this.getCategories();
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = param.get('id') || '0';
      this.getProduct(id);
    });
  }

  getProduct(id: string) {
    this.productService.getProductById(id).subscribe((data) => {
      this.product = data;
      this.images = data.images;
      this.initializeForm();
    });
  }

  getCategories() {
    this.productService
      .getCategories()
      .subscribe((data) => (this.categories = data));
  }

  saveProduct() {
    //Validamos que el formulario cumpla los requisitos
    if (!this.productForm.valid) return;

    //Realizamos la peticion de update al servidor
    let product: Product = this.productForm.value as Product;
    this.productService.updateProduct(product).subscribe({
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
