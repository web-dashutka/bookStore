export class ProductPage {
    totalCount: number;
    productsСurrentPage: any[];

    constructor(totalCount: number, productsСurrentPage: any[]) {
        this.totalCount = totalCount;
        this.productsСurrentPage = productsСurrentPage;
    }
}
