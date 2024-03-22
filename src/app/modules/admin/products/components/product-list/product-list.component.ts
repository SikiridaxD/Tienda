import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  products: Product[] = [];
  result: Product[] = []

  constructor (private productService: ProductService) {}
  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.productService.getProducts().subscribe( data => {
      this.products = data
    })
  }

  searchProduct( event: string){
    this.productService.searchProducts(event).subscribe( data => {
      this.products = data
    })
  }
}
