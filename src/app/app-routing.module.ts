import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponent/about/about.component';

import { HomeComponent } from './MyComponent/home/home.component';
import { ProductComponent } from './MyComponent/product/product.component';
import { ProductDetailsComponent } from './MyComponent/product-details/product-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'productdetails', component: ProductDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
