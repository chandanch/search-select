import { Component } from '@angular/core';
import {IOption} from 'ng-select';
import {ICurrency} from './currency.model';
import {ICountries} from './models/countries.model';

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
  private countires: Array<ICountries>;

  constructor() {
      this.optionsPlaceholder = 'Select currency';
      this.loadData();
  }

  loadData() {
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

    // For countries
    this.countires = [
      {
        id: 1,
        name: 'Afgan',
        code: 'AZ'
      },
      {
        id: 2,
        name: 'Bolchad',
        code: 'BD'
      },
      {
        id: 3,
        name: 'Azerbaijhan',
        code: 'ABJ'
      },
    ];
  }

  onSelected(currency) {
    console.log(currency);
  }

  refresh() {
    this.countires = [
      {
        id: 1,
        name: 'Afgan',
        code: 'AZ'
      },
      {
        id: 2,
        name: 'Bolchad',
        code: 'BD'
      },
      {
        id: 3,
        name: 'Azerbaijhan',
        code: 'ABJ'
      },
      {
        id: 4,
        name: 'Kenya',
        code: 'KN'
      },
    ];
  }

  trackByCountries(index: number, country: ICountries): number {
    return country.id;
  }
}
