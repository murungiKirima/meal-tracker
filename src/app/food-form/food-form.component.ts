import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Food } from '../food.model';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css']
})
export class FoodFormComponent implements OnInit {
  @Output() newFoodSender = new EventEmitter();
  addClicked(calories: number, description: string, name: string) {
    var newFoodToAdd: Food = new Food( description, name, calories);
    this.newFoodSender.emit(newFoodToAdd);
  }
  constructor() { }

  ngOnInit() {
  }

}
