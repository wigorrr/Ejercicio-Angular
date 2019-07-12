import { Component, OnInit, Input } from '@angular/core';

import { ConverterService } from '../../converter.service';
import { Quote } from '../../models/quote';
import { Change } from '../../models/change';
import { MoneyPipe } from '../pipes/money.pipe';

@Component({
  selector: 'app-converter-form',
  templateUrl: './converter-form.component.html',
  styleUrls: ['./converter-form.component.css']
})

export class ConverterFormComponent {

  @Input() PData: number;

  change: Change;
  quote: Quote;
  public a: number;
  public b: number;

  constructor(private converterService: ConverterService) {
    this.change = new Change();
   }

  getConvert() {

    const t = this.change.ingreso;

    this.converterService.getConverter().subscribe(
      quote => {
        this.quote = quote;
        this.a = quote.rates.USD;
        console.log(this.a);

        this.b = this.a * this.change.ingreso;
      //  const cardContracts = new MoneyPipe().transform(this.b);
      //  this.change.salida = this.b;
        this.change.salida = new MoneyPipe().transform(this.b);
        console.log(this.b);

      },
      (error) => {
        console.log('No se puedo realizar la conversion');
      });

  }

}

