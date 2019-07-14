import { Component } from '@angular/core'
import { HttpService } from './http.service'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: [HttpService]
})
export class ProductsListComponent {

  itemsPerPage: number = 6
  products: any[]
  error: any
  page: number
  collectionSize: number

  constructor(private httpService: HttpService) {
    this.page = 1
    this.loadPage()
  }

  loadPage() {
    this.httpService.getData(this.page, this.itemsPerPage)
    .subscribe(productPage => {
        this.products = productPage.productsСurrentPage
        this.collectionSize = productPage.totalCount
      },
      error => {this.error = error.message; console.log(this.error)}
    )
  }

  onPageChanged() {
    this.loadPage()
  }

}
