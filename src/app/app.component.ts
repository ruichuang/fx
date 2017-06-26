import { Component } from '@angular/core';
import { Country } from './model/country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  icon = 'cached';
  buy = true;
  sell = false;
  leftPrice = 100.00;
  rightPrice = 0;
  showRightAmount = true;
  showLeftAmount = true;
  countryList: Country[];
  currentCountryRight: Country;
  currentCountryLeft: Country;
  editLeft = false;
  editRight = false;

  private buyRate = 0.75;
  private sellRate = 0.7445;
  private counter = 0;


  constructor() {
    this.rightPrice = this.leftPrice * this.buyRate;
    this.countryList = [
      new Country('USD', 'US DOLLAR', 'united-states'),
      new Country('EUR', 'EURO', 'european-union'),
      new Country('GBP', 'POUND STERLING', 'united-kingdom'),
      new Country('JPY', 'YEN', 'japan'),
      new Country('CNY', 'YUAN RMB', 'china'),
      new Country('MXN', 'MEXICAN PESSO', 'mexico'),
      new Country('CAD', 'CANADIAN DOLLAR', 'canada')
    ];

    this.currentCountryRight = this.countryList[0];
    this.currentCountryLeft = this.countryList[6];

  }

  activate() {
    this.rightPrice = this.sell ? this.leftPrice * this.buyRate : this.leftPrice * this.sellRate;
    this.buy = !this.buy;
    this.sell = !this.sell;

  }

  convert() {
    if (this.counter === 0) {
      const tmp = this.rightPrice;
      this.rightPrice = this.leftPrice;
      this.leftPrice = (this.leftPrice / tmp) * this.leftPrice;
      this.counter = 1;
    } else {
      const tmp_rate = this.leftPrice / 100;
      this.leftPrice /= tmp_rate;
      this.rightPrice /= tmp_rate;
      this.counter = 0;
    }
  }

  showCountryList() {

    if (this.showRightAmount) {
      this.showRightAmount = false;
    } else {
      this.showRightAmount = true;
    }

  }

  selectCountry(index: number) {
    console.log(index);
    this.currentCountryRight = this.countryList[index];
  }

  clickToEdit() {
    this.editLeft = !this.editLeft;
  }

  clickToEditRight(){
    this.editRight = !this.editRight;
  }
}
