import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable, map } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { CategoryCall } from 'src/app/core/models/categories-call.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  api: string = environment.rootApi;

  constructor(private http: HttpClient) {}

  /**
   * Esta funcion devuelve toda la lista de productos
   */
  getProducts(): Observable<Product[]> {
    const url = `${this.api}/products`;
    return this.http.get<Product[]>(url).pipe(map((m: any) => m.products));
  }

  getProductById(id: string) {
    const url = ` ${this.api}/products/${id} `;
    return this.http.get<Product>(url);
  }

  newProduct(product: Product){
    const url = ` ${this.api}/products/add `;
    return this.http.post<Product>(url, {
      product
    } )
  }
  
  updateProduct(product: Product) {
    const url = `${this.api}/products/${product.id} `;
    return this.http.put<Product>(url,{
      product
    });
  }

  getCategories() {
    const url = ` ${this.api}/products/categories `;
    return this.http.get<string[]>(url);
  }

  getProductsByCategory(category: string){
    const url = `${this.api}/products/category/${category}`;
    return this.http.get<CategoryCall>(url);
  }

  searchProducts(search: string) { 
    const url = ` ${this.api}	/products/search?q=${search} `;
    return this.http.get<Product[]>(url).pipe(map((m: any) => m.products))
  }
}
