import { Category } from './../model/categories';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/category/categories.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  category: Category;
  availableCategory;

  constructor(private categories: CategoriesService) { }

  ngOnInit() {
    this.categories.getCategory().subscribe((res) => {
      this.availableCategory = res.categories;
    });
  }

}
