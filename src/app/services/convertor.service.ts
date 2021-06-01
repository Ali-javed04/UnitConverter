import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertorService {

  constructor() { }
  getCalculatedValue(category,convertor,value) {
    let  result
    // distance
    if(category == 1){
      // Kilometers --> Miles
      if(convertor == 1) {
        result =value * 0.62137


      }
      // Foot --> Meters
      else if(convertor == 2) {
        result =value/3.2808

      }


    }
    // volume
    else if(category == 2){
        // Ounces --> Liters
        if(convertor == 3) {
          result =value / 33.814


        }
        // Gallons --> Liters
        else if(convertor == 4) {
          result =  value * 3.785412


        }

    }
    // speed
    else if(category == 3){
       // Kilometer/hour --> Meters/sec
       if(convertor == 5) {
        result = (value * 5)/18


      }
      // Kilometer/hour --> Knots
      else if(convertor == 6) {
        result = value * 0.539957
    }


   }
   return result
  }
}
