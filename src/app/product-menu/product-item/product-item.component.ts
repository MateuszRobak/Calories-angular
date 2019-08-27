import { Component } from '@angular/core';
import { Product } from '../../models/product.model'

@Component({
    selector: "app-product-item",
    templateUrl: "./product-item.component.html",  
    styleUrls: ["./product-item.component.css"] 
})
export class ProductItem{
    fruits: Product[] = [
        new Product(0,"Apple", 0, 0.52,0),
        new Product(1, "Banana", 0, 0.88,0),        
        new Product(2, "Orange", 0, 0.47,0),
    ]   
}

