import { Component } from '@angular/core';
import { Product } from '../models/product.model'

@Component({
    selector: "app-product-menu",
    templateUrl: "./product-menu.component.html",  
    styleUrls: ["./product-menu.component.css"] 
})
export class ProductMenu{
    fruits: Product[] = [
        new Product("Jablko", null, 0.52,0),
        new Product("Banan", null, 0.88,0),               
    ]  

    vegetables: Product[] = [
        new Product("Jarmuz", null, 0.33,0),
        new Product("Pomidor", null, 0.19,0),
        new Product("Ogórek kiszony", null, 0.12,0),
        new Product("Ziemniaki", null, 0.79,0),
        new Product("Paprka", null, 0.32,0),
        new Product("Jajko", null, 1.50,0),
        new Product("Mleko", null, 0.50,0),
    ]

    dairy: Product[] = [
        new Product("Jogurt naturalny", null, 0.70, 0),
        new Product("Orzechy", null, 6.66, 0),
        new Product("Słonecznik", null, 5.77, 0),
        new Product("Pestki dynii", null, 5.89, 0),
        new Product("Oliwa", null, 8.82, 0),
        new Product("Miód", null, 3.24, 0),
        new Product("Rodzynki", null, 2.86, 0),
        new Product("Camembert", null, 2.93, 0),
        new Product("Indyk", null, 0.84, 0)
    ]
}

