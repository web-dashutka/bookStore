import { Injectable } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Injectable({
  providedIn: 'root',
})
export class ProductFilterService {

  constructor(private productsService: ProductsService) { }

  public filterByPrice() {
    this.productsService.getProducts().subscribe(prods => {
      const filteredProducts = prods.map(prod => {
        console.log(prod);
      });
    });
  }
}
