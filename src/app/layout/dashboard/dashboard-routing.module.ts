import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerModule } from 'src/app/modules/customer/customer.module';
import { EnquiryComponent } from 'src/app/modules/customer/enquiry/enquiry.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
 {path:'',component:DashboardComponent
 ,children:[
    {
    path:'customer',
    loadChildren:()=>CustomerModule
  
}]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
