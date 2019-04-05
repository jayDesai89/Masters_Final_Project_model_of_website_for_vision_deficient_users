import { ProductsService } from './../services/product/products.service';
import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme/theme.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Url } from 'url';

/**
 *  Due to not having large color options locally interface of model is created
 *  This should be created in model.ts file when array of colors is coming from API
 */
export interface ArrayOfBackgroundColors {
  value: string;
  viewValue: string;
}

export interface ArrayOfBackgroundPattern {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {
  appTheme;
  arrayOfBackgroundColors: ArrayOfBackgroundColors[] = [
    { value: 'red', viewValue: 'Red' },
    { value: 'yellow', viewValue: 'Yellow' },
    { value: 'blue', viewValue: 'Blue' }
  ];
  arrayOfBackgroundPattern: ArrayOfBackgroundPattern[] = [
    { value: '../../assets/backgroundPatterns/stripe_1.png', viewValue: 'Pattern_1'},
    { value: '../../assets/backgroundPatterns/stripe_2.png', viewValue: 'Pattern_2'}
  ];
  // Form selections and this can be used for "gather data" and then use this as database.
  backgroundColorsForm;
  // Get the value of form-field
  get backgroundColorValue() {
    return this.backgroundColorsForm.get('backgroundColor');
  }

  get backgroundPatternValue() {
    return this.backgroundColorsForm.get('backgroundPattern');
  }
  displayDetailOfTshirt
  constructor(public theme: ThemeService, public productsService: ProductsService) { }

  ngOnInit() {
    this.theme.themeOfApp.subscribe(res => this.appTheme = res);
    console.log(this.arrayOfBackgroundColors);
    this.backgroundColorsForm = new FormGroup({
      'backgroundColor': new FormControl(''),
      'backgroundPattern': new FormControl('')
    });

    this.productsService.getProductsForMen().subscribe((res) => {
      this.displayDetailOfTshirt = res.menProducts.tshirt;
      console.log(this.displayDetailOfTshirt);
    });
  }

}
