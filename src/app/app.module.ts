import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';

import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TextSentimentComponent } from './text-sentiment/text-sentiment.component';
import { TextDetectionComponent } from './text-detection/text-detection.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerAccountsComponent } from './customer-accounts/customer-accounts.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { loginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    FooterComponent,
    DashboardComponent,
    NotfoundComponent,
    TextSentimentComponent,
    TextDetectionComponent,
    CustomersComponent,
    CustomerAccountsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    NgProgressModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgProgressRouterModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule
],
  bootstrap: [AppComponent]
})
export class AppModule { }
