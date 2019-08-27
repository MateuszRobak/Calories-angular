import { Component } from '@angular/core';
import { Product } from '../models/product.model'
import { isEmptyExpression } from '@angular/compiler';
@Component({
    selector: "app-calories",
    templateUrl: "./calories.component.html",
    styleUrls: ["./calories.component.css"]    
})
export class CaloriesComponent{    

    products: Product[] = [
        new Product(0,"Apple", 0, 0.52,0),
        new Product(1, "Banana", 0, 0.88,0),        
        new Product(2, "Orange", 0, 0.47,0),        
    ] 

    isEmpty(index){
        if (this.products[index].userInput === 0 || this.products[index].userInput === null) 
            return true;
        return false;
    }

    showCountedCalories(index){                       
        this.products[index].counted = this.countCalories(index)   
    }

    countCalories(index){
        return this.products[index].userInput * this.products[index].calories
    }


}