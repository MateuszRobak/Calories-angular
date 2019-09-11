import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model'
import { selectedProducts } from '../../state/selected-products';

@Component({
    selector: "app-product-item",
    templateUrl: "./product-item.component.html",  
    styleUrls: ["./product-item.component.css"] 
})
export class ProductItem{
    @Input() product: Product;


    /*
        This function is supposed to be called by the '+' button'.
        It adds the selected product to global list of selected products.
    */
    addSelectedProduct = (product: Product) => {
        selectedProducts.push(product);
    }
}

