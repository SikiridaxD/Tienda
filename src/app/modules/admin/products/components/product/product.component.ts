import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/core/models/product.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  id: string = '';
  product!: Product;
  categories: string[] = [];
  images: any[] = []

  productForm = this.formBuilder.group({
    title: ['', Validators.required],
    category: ['',Validators.required],
    brand: ['',Validators.required],
    price: [0, Validators.required],
    description: ['', Validators.required],
  });

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {
    this.productService
      .getCategories()
      .subscribe((data) => this.categories = data);
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.id = param.get('id') || '0';
      this.productService.getProductById(this.id).subscribe((data) => {
        this.product = data;
        this.images = data.images
        this.updateFormValues();
      });
    });
  }

  updateFormValues() { 
    this.productForm.patchValue(this.product)
  }
}
 