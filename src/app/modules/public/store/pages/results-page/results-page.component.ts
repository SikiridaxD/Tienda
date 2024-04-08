import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/modules/admin/products/services/product.service';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss']
})
export class ResultsPageComponent implements OnInit{
  search: string = '';
  products: Product[] = []

  constructor (
    private route: ActivatedRoute,
    private productService: ProductService,
  ){}
  
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let search = param.get('search') || '0';
      this.searchProducts( search );
      this.search =  search;
    });
  }

  searchProducts( search: string ){
    this.productService.searchProducts( search ).subscribe( data => {
      this.products = data
    })
  }
  

}
