import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/components/products-list/models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})

export class ProductsListComponent {

  public itemsPerPage = 6;
  public products: Product[];
  private error: string;
  public page: number;
  public collectionSize: number;

  constructor(private productsService: ProductsService) {
    this.page = 1;
    this.loadPage();
  }

  private loadPage() {
    this.productsService.getProductsForSpecificPage(this.page, this.itemsPerPage)
    .subscribe(productPage => {
        this.products = productPage.productsСurrentPage;
        this.collectionSize = productPage.totalCount;
      },
      error => {
        this.error = error.message; console.log(this.error);
      },
    );
  }

  public onPageChanged() {
    this.loadPage();
  }

}
