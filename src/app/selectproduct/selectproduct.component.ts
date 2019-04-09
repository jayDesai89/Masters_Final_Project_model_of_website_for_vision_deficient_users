import { HandleroutingService } from './../services/routing/handlerouting.service';
import { ProductsService } from './../services/product/products.service';
import { CategoriesService } from './../services/category/categories.service';
import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme/theme.service';

@Component({
  selector: 'app-selectproduct',
  templateUrl: './selectproduct.component.html',
  styleUrls: ['./selectproduct.component.scss']
})
export class SelectproductComponent implements OnInit {
  appTheme;
  showSelectedCategory;
  isBWclicked = false;
  isBYclicked = false;
  isYBclicked = false;
  products;
  constructor(public theme: ThemeService,
  private categoryService: CategoriesService,
  private productsService: ProductsService,
  private handleRouting: HandleroutingService) { }

  ngOnInit() {
    window.scroll(0,0);
    this.theme.themeOfApp.subscribe(res => this.appTheme = res);
    this.categoryService.checkcategorySelected.subscribe((res) => {
      this.showSelectedCategory = res;
    });

    this.productsService.getProductsForMen().subscribe((res) => {
      console.log(res);
      this.products = res.menProducts;
      console.log(this.products.menProducts);
    });
  }

  goNext(nextPage) {
    this.handleRouting.getStepNumber(nextPage);
  }
}
