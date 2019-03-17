import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme/theme.service';

@Component({
  selector: 'app-selectproduct',
  templateUrl: './selectproduct.component.html',
  styleUrls: ['./selectproduct.component.scss']
})
export class SelectproductComponent implements OnInit {
  appTheme;
  constructor(public theme: ThemeService) { }

  ngOnInit() {
    this.theme.themeOfApp.subscribe(res => this.appTheme = res);
  }

}
