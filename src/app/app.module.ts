import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ProductComponent } from './components/product/product.component';
import { ProductShowcaseComponent } from './components/product-showcase/product-showcase.component';
import { SignInComponent } from './components/signIn/sign-in.component';
import { SignUpComponent } from './components/signUp/sign-up.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InMemoryDataService } from './api/in-memory-data.service';

const LayoutChildRoutes: Routes = [
  {path: '', component: ProductShowcaseComponent},
];

const appRoutes: Routes = [
  {path: '', component: LayoutComponent, children: LayoutChildRoutes},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsListComponent,
    FiltersComponent,
    ProductComponent,
    SignInComponent,
    SignUpComponent,
    LayoutComponent,
    SidebarComponent,
    ProductShowcaseComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false },
    ),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
