import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import {Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { ProductsListComponent } from './components/products-list/products-list.component'
import { FiltersComponent } from './components/filters/filters.component'
import { ProductComponent } from './components/product/product.component'
import { StoreComponent } from './components/store/store.component'
import { SignInComponent } from './components/signIn/sign-in.component'
import { SignUpComponent } from './components/signUp/sign-up.component'
import { InMemoryDataService } from './api/in-memory-data.service'

// определение маршрутов
const appRoutes: Routes = [
  { path: '', component: StoreComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'sign-up', component: SignUpComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsListComponent,
    FiltersComponent,
    ProductComponent,
    StoreComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
