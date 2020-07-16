import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'signin'
})
export class SigninPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
