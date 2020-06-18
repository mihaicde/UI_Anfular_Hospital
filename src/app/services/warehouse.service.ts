import { Injectable } from '@angular/core';
import { ProductModel } from '../mockData/product.model';
import { warehouse1 } from '../mockData/warehouse.mock';

@Injectable()
export class WarehouseService {

    products: ProductModel[] = [];
    myProducts: ProductModel [] = [];

    constructor() {
        Object.assign(this, { warehouse1 });
        this.products = warehouse1;
    }

    getProducts() {
        return this.products;
    }

    updateQty(id, qty) {
        this.myProducts.push(new ProductModel(this.products[id].name, this.products[id].description, qty))
        this.products[id].qty = this.products[id].qty -qty;
    }

    getMyProducts(){
        return this.myProducts;
    }
}