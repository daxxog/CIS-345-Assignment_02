import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Product } from './modules/Product'
import { ProductList } from './modules/ProductList'

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


function main() {
    // data pulled in from the PDF assignment,
    // formatted to JSON quick with macros
    const _data: any = {
        'code': [
            100,
            200,
            300,
            400,
            500
        ],

        'name': [
            'Cap',
            'Jacket',
            'Coat',
            'Gloves',
            'Book'
        ],

        'category': [
            'Winter wear',
            'Winter wear',
            'Winter wear',
            'Winter wear',
            'Books'
        ],

        'price': [
            200,
            1000,
            2050,
            350,
            150
        ]
    };

    // convert raw _data object into our structured ProductList
    // --------------------------------------------------------
    // as a speedup in the form of pre-computing,
    // we could JSON.stringify the output of this calculation
    // and put it in the source code if we wanted to
    const productList: ProductList = (() => {
        // basically we need to invert the
        // two dimensional _data structure
        // so a list of associative arrays
        // ( instead of an associative array of lists )
        // a list holding any type will satisfy this
        const _anyList: any[] = [];

        // iterate over the associative array
        for (const property in _data) {
            // with each value (list) in the associative array,
            // iterate over each value in the list
            _data[property].forEach( (v: any, i: number) => {
                // if we haven't created an associative array for
                // this index yet, go ahead and create it
                if (typeof _anyList[i] === 'undefined') {
                    _anyList[i] = {};
                }

                // assign the value to the key of the
                // associative array at the current index
                _anyList[i][property] = v;
            });
        }

        // convert _anyList to ProductList object using map
        return new ProductList(
            _anyList.map(
                v => new Product(v)
            )
        );
    })();


    // tests
    console.log(productList.getProductByCode(200));
    console.log(productList.getProductsBycategory('Winter wear'));

    const newProduct = new Product({
        code: '1337', // kinda weird that the lab has code be a string here . . .
        price: 1234,
        category: 'Winter wear',
        name: 'Snow suit'
    });

    productList.addProduct(newProduct);
    console.log(productList.productList);
    console.log(productList.getProductByCode(1337)); // . . . but a number down here
}

main();
