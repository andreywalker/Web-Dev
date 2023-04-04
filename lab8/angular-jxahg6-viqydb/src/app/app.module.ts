import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductsComponent } from './products/products.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductItemComponent } from './product-item/product-item.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'home', component: CategoryListComponent },
      { path: 'products/:name', component: ProductsComponent},
      { path: 'products/', component: TopBarComponent},
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductsComponent,
    CategoryListComponent,
    ProductItemComponent
  ],
  bootstrap: [
    AppComponent
  ]

})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/