import { Product } from './Product'
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.less']
})
export class ProductsListComponent implements OnInit {
    private _productList: Product[]

    constructor() {
        this._productList = new Array<Product>(
            new Product({
                code: '100',
                name: 'Cap',
                category: 'Winter wear',
                price: 200
            }),
            new Product({
                code: '200',
                name: 'Jacket',
                category: 'Winter wear',
                price: 1000
            }),
            new Product({
                code: '300',
                name: 'Coat',
                category: 'Winter wear',
                price: 2090
            }),
            new Product({
                code: '400',
                name: 'Gloves',
                category: 'Winter wear',
                price: 100
            }),
            new Product({
                code: '500',
                name: 'Guitar',
                category: 'Musical intruments',
                price: 350
            })
        );
    }

    // used in:
    // <tr *ngFor="let product of products; let i = index">
    get products(): Product[] {
        return this._productList;
    }

    ngOnInit(): void {
    }

}
