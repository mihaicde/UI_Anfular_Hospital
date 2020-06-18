import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { ChartsComponent } from './components/dashboard/charts/charts.component';
import { WarehouseComponent } from './components/dashboard/warehouse/warehouse.component';
import { CheckoutComponent } from './components/dashboard/checkout/checkout.component';




const routes: Routes = [
  { path : "" , redirectTo : "charts", pathMatch : "full"},
 
  {path : 'charts', component : ChartsComponent },
  {path : 'warehouse', component : WarehouseComponent },
  {path : 'checkout', component : CheckoutComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
