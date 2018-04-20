import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  color = 'accent';
  checked = false;
  buttonElevation = 12;
  shades = [
    '100',
    '300',
    '500',
    '600',
    '900',
  ];

  fonts = [
    'Cute Font',
    'Gugi',
    'Open Sans Condensed',
    'Raleway',
    'Gaegu',
    'Roboto'
  ];

  darkTheme = false;
  customWarn = false;
  customAccent = false;
  customBtn = false;
  selectedShade: string;
  selectedFont: string;
  currentTheme = 'theme-500';

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
  }

  changeShade() {
    this.darkTheme = false;
    this.currentTheme = `theme-${this.selectedShade}`;
  }

  changeWarn() {
    this.darkTheme = false;
    this.currentTheme = this.customWarn === true ? `custom-warn-colour` : `theme-500`;
  }

  changeAccent() {
    this.darkTheme = false;
    this.currentTheme = this.customAccent === true ? `same-palette` : `theme-500`;
  }

  changeOnlyButton() {
    this.darkTheme = false;
    this.currentTheme = this.customBtn === true ? `btn-theme-900` : `theme-500`;
  }

  changeFont(index) {
    this.darkTheme = false;
    console.log('change font', index);
    this.currentTheme = `font-${index}`;
    //this.currentTheme = this.customFont === true ? `custom-font` : `theme-500`;
  }
}
