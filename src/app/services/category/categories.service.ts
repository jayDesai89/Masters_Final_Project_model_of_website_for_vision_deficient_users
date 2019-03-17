import { Category } from './../../model/categories';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategory(): Observable<Category> {
    const api = this.http.get('../../../assets/json/categories.json');
    return api as Observable<Category>;
  }
}
