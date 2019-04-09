import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { SelectproductComponent } from './selectproduct/selectproduct.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
   { path: 'selectproduct', component: SelectproductComponent},
    { path: 'productdetail', component: ProductdetailComponent},
     { path: 'payment', component: PaymentComponent},
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes),
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    CommonModule,
    RouterModule
  ],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
