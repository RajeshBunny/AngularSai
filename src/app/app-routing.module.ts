import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerAccountsComponent } from './customer-accounts/customer-accounts.component';
import { CustomersComponent } from './customers/customers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { loginComponent } from './login/login.component';


import { NotfoundComponent } from './notfound/notfound.component';
import { TextDetectionComponent } from './text-detection/text-detection.component';
import { TextSentimentComponent } from './text-sentiment/text-sentiment.component';

const routes: Routes = [
  { path: "login", component: loginComponent },
  { path: "dashboard", component: DashboardComponent, children: [


    { path: "textsentiment", component: TextSentimentComponent },
   
    { path: "textdetection", component: TextDetectionComponent },
      
  { path: "customers", component: CustomersComponent },
  { path: "customer-account", component: CustomerAccountsComponent },

  ]},
  { path: "", redirectTo: "login", pathMatch: "full" }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
