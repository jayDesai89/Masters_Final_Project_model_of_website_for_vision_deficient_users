import { ProductsForMen } from './../../model/productsForMen';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProductsForMen(): Observable<ProductsForMen> {
    const api = this.http.get('../../../assets/json/menProduct.json');
    return api as Observable<ProductsForMen>;
  }
}
