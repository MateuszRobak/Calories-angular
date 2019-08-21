import { Component } from '@angular/core';
import { Product } from './product.model'
import { isEmptyExpression } from '@angular/compiler';
@Component({
    selector: "app-calories",
    templateUrl: "./calories.component.html",
    styleUrls: ["./calories.component.css"]    
})
export class CaloriesComponent{    

    calories: Product[] = [
        new Product(0,"Apple", 0, 0.52,0),
        new Product(1, "Banana", 0, 0.88,0),        
        new Product(2, "Orange", 0, 0.47,0),        
    ] 

    isEmpty(index){
        if (this.calories[index].userInput === 0 || this.calories[index].userInput === null) 
            return true;
        return false;
    }

    showCountedCalories(index){                       
        this.calories[index].counted = this.countCalories(index)   
    }

    countCalories(index){
        return this.calories[index].userInput * this.calories[index].calories
    }


}