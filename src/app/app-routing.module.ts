import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomAuthGuard } from './custom-auth.guard';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CustomerModule } from './modules/customer/customer.module';
import { QuotationComponent } from './modules/customer/quotation/quotation.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path:'dashboard',component: DashboardComponent,  //canActivate: [CustomAuthGuard],
    children:[
      {
        path:'customer',loadChildren:()=>CustomerModule
      }
    ]
  
},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
