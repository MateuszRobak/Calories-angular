import { Product } from '../models/product.model';

/*
Here we create an object that keeps state of selected products.
It lives for the whole time of the app life and is global, i.e. available (and shared) to all components.
*/
export const selectedProducts: Product[] = [
    // new Product(0,"Apple", 0, 0.52,0),
    // new Product(1, "Banana", 0, 0.88,0),        
    // new Product(2, "Orange", 0, 0.47,0),        
];
