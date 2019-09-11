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

    /*
    Let's assign the global state of selected products the component's product list.
    When something changes in the global state, the HTML will be automatically rebuild (rerendered) with the new state of the object.
    */
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