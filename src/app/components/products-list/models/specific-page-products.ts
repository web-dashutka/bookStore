import { Product } from './product';

export class SpecificPageProducts {
    totalCount: number;
    productsСurrentPage: Product[];

    constructor(totalCount: number, productsСurrentPage: Product[]) {
        this.totalCount = totalCount;
        this.productsСurrentPage = productsСurrentPage;
    }
}
