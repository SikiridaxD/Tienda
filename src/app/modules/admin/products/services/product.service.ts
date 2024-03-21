import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable, map } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  api: string = environment.rootApi;

  constructor(private http: HttpClient) {}

  /**
   *
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
}
