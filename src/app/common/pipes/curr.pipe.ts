import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'curr'
})
export class CurrPipe implements PipeTransform {

  transform(value: number): string {
    let value_str : string = value.toString();
    let result : string = "";
    if(value_str.length === 5) {
      for (let i = 0; i < value_str.length; i++) {
        if(i === 2) {
          result += " ";
        }
        result += value_str.charAt(i);
      }
    }
    else if(value_str.length === 6){
      for (let i = 0; i < value_str.length; i++) {
        if(i === 3) {
          result += " ";
        }
        result += value_str.charAt(i);
      }
    }
    else {
      result = value_str;
    }
   return result + "Ft";
  }

}
