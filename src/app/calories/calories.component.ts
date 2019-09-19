import { Component } from '@angular/core';
import { Product } from '../models/product.model'
import { selectedProducts } from '../state/selected-products';
import { isEmptyExpression } from '@angular/compiler';

@Component({
    selector: "app-calories",
    templateUrl: "./calories.component.html",
    styleUrls: ["./calories.component.css"]    
})
export class CaloriesComponent{    

    products = selectedProducts;

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