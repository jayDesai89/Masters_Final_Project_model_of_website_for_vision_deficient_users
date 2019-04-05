import { Category } from './../../model/categories';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class CategoriesService {

   private categorySelected = new BehaviorSubject<boolean>(true);
  checkcategorySelected = this.categorySelected.asObservable();


  constructor(private http: HttpClient) { }

  getCategory(): Observable<Category> {
    const api = this.http.get('../../../assets/json/categories.json');
    return api as Observable<Category>;
  }

  getSelectedCategory(category) {
    this.categorySelected.next(category);
  }
}
