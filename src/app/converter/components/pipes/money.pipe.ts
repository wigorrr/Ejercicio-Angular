import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})

export class MoneyPipe implements PipeTransform {

  transform(value: any, args?: number): any {
    const flotante = parseFloat(value);
     return 'USD | ' + flotante;
    // return 'USD | ' + args;
  }
}