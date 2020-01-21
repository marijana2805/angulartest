import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import {RouterModule} from '@angular/router';
import {ProductAlertComponent} from './product-list/product-alert/product-alert.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CartServiceComponent } from './cart-service/cart-service.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailsComponent,
    CartServiceComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: ProductListComponent},
      {path: 'products/:productId', component: ProductDetailsComponent},
      { path: 'cart', component: CartComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
