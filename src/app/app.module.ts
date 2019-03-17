import { CategoriesService } from './services/category/categories.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ApplicationModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent, RemoveUserDialogBox } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line:max-line-length
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatRadioModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Browser } from 'protractor';
import { CapitalizePipe } from './common/pipes/capitalize.pipe';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { PaymentComponent } from './payment/payment.component';
import { SelectproductComponent } from './selectproduct/selectproduct.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainNavComponent,
    CapitalizePipe,
    SelectproductComponent,
    ProductdetailComponent,
    PaymentComponent,
    RemoveUserDialogBox
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
    CommonModule
  ],
  entryComponents: [RemoveUserDialogBox],
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
    MatRadioModule
  ],
  providers: [
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**
 * Add meterial icon for icons, set-up is not done for that
 *
 *
*/
