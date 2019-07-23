import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SpecificPageProducts } from '../components/products-list/models/specific-page-products';
import { Product } from '../components/products-list/models/product';

@Injectable()

export class HttpService {

    private productUrl = 'api/products';

    constructor(private httpClient: HttpClient) { }

    public getProducts(): Observable<Product[]> {
        const products = this.httpClient.get<Product[]>(this.productUrl);
        return products;
    }

    public getProductsForSpecificPage(page: number, itemsPerPage: number): Observable<SpecificPageProducts> {
        const specificPageProducts = this.getPageItems(this.getProducts(), page, itemsPerPage);
        return specificPageProducts;
    }

    private getPageItems(products: Observable<Product[]>, page: number, itemsPerPage: number): Observable<SpecificPageProducts> {
        const productsPage = products.pipe(
            map((prods: Product[]) => {
                const startIdx = itemsPerPage * (page - 1);
                const productsSlice = new SpecificPageProducts(prods.length, prods.slice(startIdx, startIdx + itemsPerPage));
                return productsSlice;
            }),
        );
        return productsPage;
    }
}
