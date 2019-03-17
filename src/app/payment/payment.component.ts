import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme/theme.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  appTheme;
  constructor(public theme: ThemeService) { }

  ngOnInit() {
    this.theme.themeOfApp.subscribe(res => this.appTheme = res);
  }

}
