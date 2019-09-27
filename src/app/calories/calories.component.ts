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
        return (this.products[index].counted = this.countCalories(index)).toFixed(2)
    }

    countCalories(index){
        return this.products[index].userInput * this.products[index].calories
    }

    removeProduct(index){
        this.products[index].userInput = null;
        selectedProducts.splice(index,1)
    }

    showCountedCaloriesForAllProducts(){
        var value = 0;
        for(let i in selectedProducts){
            value += selectedProducts[i].counted
        } return value.toFixed(2)
    }

    isProductsLenghtHigherThanOne(){
      if(this.products.length > 0) return true;  
    }


}