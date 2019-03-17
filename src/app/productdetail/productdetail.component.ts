import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme/theme.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {
  appTheme;
  constructor(public theme: ThemeService) { }

  ngOnInit() {
     this.theme.themeOfApp.subscribe(res => this.appTheme = res);
  }

}
