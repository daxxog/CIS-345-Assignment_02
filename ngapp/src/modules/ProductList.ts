import { Product } from './Product'

interface ProductByCode {
    [key: string]: Product;
}

interface ProductsByCategory {
    [key: string]: Product[];
}

export class ProductList {
    private _productList: Product[]
    private _productByCode: ProductByCode = {}
    private _productsByCategory: ProductsByCategory = {}

    constructor(
        productList: Product[]
    ) {
        this._productList = productList;
        this.precomputeProducts();
    }

    get productList(): Product[] {
        return this._productList;
    }

    set productList(productList: Product[]) {
        this._productList = productList;
        this.precomputeProducts();
    }

    private resetPreComputations() {
        this._productByCode = {};
        this._productsByCategory = {};
    }

    // call this function whenever the entire list of products changes
    // should be in the setter for productList and the constructor
    private precomputeProducts() {
        this.resetPreComputations();
        this._productList.forEach(product => this.precomputeOneProduct(product));
    }

    // call this function on each product we need to pre-compute lookup tables for
    // we should only call this once for each product
    private precomputeOneProduct(product: Product) {
        // make sure we have an array for the product category
        if(typeof this._productsByCategory[product.category] === 'undefined') {
            this._productsByCategory[product.category] = [];
        }

        // add the product to the category
        this._productsByCategory[product.category].push(product);

        // this assumes that there is only one product with a specific code
        this._productByCode[product.code] = product;
    }

    getProductByCode(code: number): Product {
        // EDGE CASE / JAVASCRIPT IS FUN
        // =========================================================================================
        //              (insert flames here) THIS IS FINE (insert flames here)
        // =========================================================================================
        // javascript/TS lets you access a key of type string in an associative array using a number
        // even though they are totally different types
        // e.g. '123' == 123 in javascript
        // so even though _productByCode the key is type string
        // and code is type number
        // for whatever reason typescript still compiles this and is like "LGTM"
        // =========================================================================================
        //              (insert flames here) THIS IS FINE (insert flames here)
        // =========================================================================================

        return this._productByCode[code];
    }

    getProductsBycategory(category: string): Product[] {
        return this._productsByCategory[category];
    }

    addProduct(product: Product) {
        this.precomputeOneProduct(product);
        this._productList.push(product);
    }
}
