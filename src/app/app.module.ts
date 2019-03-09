import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BrowserModule} from '@angular/platform-browser/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    CommonModule
  ],
  exports: [CommonModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**
 * Add meterial icon for icons, set-up is not done for that
 *
 *
*/
