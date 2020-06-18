import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './components/login/login.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './components/dashboard/home/home.component';
import { MenuComponent } from './components/dashboard/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ChartsComponent } from './components/dashboard/charts/charts.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatTableModule } from '@angular/material/table';
import { WarehouseComponent } from './components/dashboard/warehouse/warehouse.component';
import { DialogComponent } from './components/dashboard/warehouse/pop-ups/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { WarehouseService } from './services/warehouse.service';
import { CheckoutComponent } from './components/dashboard/checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    ChartsComponent,
    WarehouseComponent,
    DialogComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatTableModule,
    NgxChartsModule,
    MatDialogModule
    
  ],
  providers: [
    AuthService,
    WarehouseService
  ],
  entryComponents:[
    DialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
