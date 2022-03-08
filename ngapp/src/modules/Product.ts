interface ProductParams {
    code: string;
    name: string;
    category: string;
    price: number;
}

export class Product {
    private _code: string;
    private _name: string;
    private _category: string;
    private _price: number;

    constructor(
        params: ProductParams
    ) {
        this._code = params.code;
        this._name = params.name;
        this._category = params.category;
        this._price = params.price;
    }

    get code(): string {
        return this._code;
    }

    set code(code: string) {
        this._code = code;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get category(): string {
        return this._category;
    }

    set category(category: string) {
        this._category = category;
    }

    get price(): number {
        return this._price;
    }

    set price(price: number) {
        this._price = price;
    }
}
