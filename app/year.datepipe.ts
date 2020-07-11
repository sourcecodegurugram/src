import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'year'
})
export class YearDatePipe extends 
             DatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return super.transform(value, " dd MMMM yyyy ");
  }


}
