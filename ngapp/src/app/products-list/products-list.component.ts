import { Product } from './Product'
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.less']
})
export class ProductsListComponent implements OnInit {
    private _productList: Product[]
    private _selectedProduct: Product
    private _productIsSelected: boolean = false;
    private _border: boolean = true;


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

        this._selectedProduct = this._productList[0];
    }

    // used in:
    // <tr *ngFor="let product of products; let i = index">
    // and also used to get number of products for top paragraph
    get products(): Product[] {
        return this._productList;
    }

    get selectedProduct(): Product {
        return this._selectedProduct;
    }

    get border(): boolean {
        return this._border
    }

    get productIsSelected(): boolean {
        return this._productIsSelected
    }

    selectProduct(i: number) {
        this._selectedProduct = this._productList[i];
        this._productIsSelected = true;
    }

    deselectProduct() {
        this._productIsSelected = false;
    }

    toggleBorder(): void {
        this._border = !this._border;
    }

    ngOnInit(): void {
    }

}
