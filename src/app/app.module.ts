import { CategoriesService } from './services/category/categories.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ApplicationModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent, SelectThemeDialogBox } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line:max-line-length
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatRadioModule,
  MatSelectModule,
  MatTooltipModule
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Browser } from 'protractor';
import { CapitalizePipe } from './common/pipes/capitalize.pipe';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { PaymentComponent, PreviewOrderDialogBox } from './payment/payment.component';
import { SelectproductComponent } from './selectproduct/selectproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WindowserviceService } from './services/window/windowservice.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainNavComponent,
    CapitalizePipe,
    SelectproductComponent,
    ProductdetailComponent,
    PaymentComponent,
    SelectThemeDialogBox,
    PreviewOrderDialogBox
  ],
  imports: [
    HttpClientModule,
    ApplicationModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    MatTooltipModule,
    ReactiveFormsModule,
    CommonModule
  ],
  entryComponents: [SelectThemeDialogBox, PreviewOrderDialogBox],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatRadioModule,
    MatTooltipModule,
    ReactiveFormsModule
  ],
  providers: [
    CategoriesService,
    WindowserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**
 * Add meterial icon for icons, set-up is not done for that
 *
 *
*/
