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

    addSelectedProduct(product: Product){
        if(selectedProducts.includes(product)){
            return false;
        } else {
            selectedProducts.push(product);
        }
        
    }
}

