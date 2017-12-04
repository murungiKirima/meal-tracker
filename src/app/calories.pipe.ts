import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: 'calories',
  pure: false
})
export class CaloriesPipe implements PipeTransform {

  transform(input: Food[], desiredCalorieCount) {
    var output: Food[] = [];
    if(desiredCalorieCount === "under200") {
      for (var i=0; i<input.length; i++) {
        if (input[i].calories < 200) {
          output.push(input[i]);
        }
      }
      return output;
    }else if (desiredCalorieCount === "over200") {
      for (var i=0; i<input.length; i++) {
        if (input[i].calories >= 200) {
          output.push(input[i]);
        }
      }
      return output;
    }else {
      return input;
    }
  }
}
