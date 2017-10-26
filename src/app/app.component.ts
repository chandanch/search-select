import { Component } from '@angular/core';
import {IOption} from 'ng-select';
import {ICurrency} from './currency.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Search Select';
  // data for select options
  myOptions: Array<ICurrency>;
  optionsPlaceholder: string;
  selectedCurrency: ICurrency;
  option: ICurrency;

  constructor() {
    if (window.innerHeight > 300) {
      this.optionsPlaceholder = 'Select currency';
      this.myOptions = [
        {
          label: 'US Dollars',
          value: 'USD',
          country: 'USA'
        },
        {
          label: 'Afghani',
          value: 'AFN',
          country: 'Afganisthan'
        },
        {
          label: 'European euro',
          value: 'EUR',
          country: 'Europe'
        },
        {
          label: 'Azerbaijan manat',
          value: 'AZN',
          country: 'Azerbaijan'
        },
        {
          label: 'Botswana pula',
          value: 'BWP',
          country: 'Botswana'
        },
      ];
    }
    else {
      this.optionsPlaceholder = 'NO Data found';
    }
  }

  onSelected(currency) {
    console.log(currency);
  }
}
