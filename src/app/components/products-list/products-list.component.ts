import { Component, OnInit } from '@angular/core'
import { HttpService } from './http.service'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: [HttpService]
})
export class ProductsListComponent implements OnInit {

  products: object
  error: any

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData().subscribe(
      data => this.products = data,
      error => {this.error = error.message; console.log(this.error)}
      )
  }

}
