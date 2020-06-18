
export class ProductModel {

    id: number;
    name: string;
    description: string;
    qty: number;


    constructor(
        name: string,
        descriptrion: string,
        qty: number

    ) {
        this.name = name;
        this.description = descriptrion;
        this.qty = qty;

    }
}