import { Component } from '@angular/core';
import { ProductFilterService } from 'src/app/services/product-filter.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
})

export class FiltersComponent {

  constructor(private productFilterService: ProductFilterService) { }

  public priceFilter() {
    this.productFilterService.filterByPrice();
  }
}
