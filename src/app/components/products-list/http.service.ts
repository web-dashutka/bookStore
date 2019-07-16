import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProductPage } from './product-page';

@Injectable()

export class HttpService {

    constructor(private httpClient: HttpClient) { }

    getData(page: number, itemsPerPage: number): Observable<ProductPage> {
        const products = this.httpClient.get<any[]>('api/products');
        return this.getPageItems(products, page, itemsPerPage);
    }

    private getPageItems(products: Observable<any[]>, page: number, itemsPerPage: number): Observable<ProductPage> {
        return products.pipe(
            map(prod => {
                const startIdx = itemsPerPage * (page - 1);
                return new ProductPage(prod.length, prod.slice(startIdx, startIdx + itemsPerPage));
            }),
        );
    }
}
