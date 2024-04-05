import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/modules/admin/products/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  relatedProducts: Product[] = [];
  loading: boolean = true;
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
  images: any[] = [];
  value: number = 0;
  responsiveOptions: any[] = [];
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = param.get('id') || '0';
      this.getProduct(id);
    })
    setTimeout(() => {
      this.getRelatedProducts( this.product.category );
    }, 600);
    
    ;
  }

  getProduct(id: string) {
    return this.productService.getProductById(id).subscribe((data) => {
      this.product = data;
      this.value = Math.floor(this.product.rating);
      this.images = data.images;
    });
  }

  getRelatedProducts(category: string) {
    this.productService
      .getProductsByCategory(category)
      .subscribe((data) => {
        const { products }  = data
        const uniqueProducts = this.removeDuplicateProduct(products, this.product.id!)
        this.relatedProducts =  uniqueProducts.slice(0, 3);
        this.loading = false;
      });
  }
  
  removeDuplicateProduct(products: Product[], productId: number) {
    // Filtrar el array para eliminar el producto seleccionado por su ID
    return this.relatedProducts = products.filter( product => product.id !== productId );
  }

  getDiscountPrice(): number {
    return (
      this.product.price -
      (this.product.price / 100) * this.product.discountPercentage
    );
  }


 
}
