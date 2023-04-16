import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { AboutComponent } from './MyComponent/about/about.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { NavbarComponent } from './MyComponent/navbar/navbar.component';
import { FooterComponent } from './MyComponent/footer/footer.component';
import { ProductComponent } from './MyComponent/product/product.component';
import { ProductDetailsComponent } from './MyComponent/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
  
    AboutComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
