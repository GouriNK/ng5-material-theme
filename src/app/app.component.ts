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

  darkTheme = false;
  customWarn = false;
  customAccent = false;
  customBtn = false;
  selectedShade: string;
  currentTheme = 'theme-500';

  toggleTheme() {
    console.log('here');
    this.darkTheme = !this.darkTheme;
  }

  changeShade() {
    console.log('changeShade : ', this.selectedShade);
    this.currentTheme = `theme-${this.selectedShade}`;
  }

  changeWarn() {
    console.log('changeWarn : ', this.customWarn);
    this.currentTheme = this.customWarn === true ? `custom-warn-colour` : `theme-500`;
  }

  changeAccent() {
    console.log('changeAccent : ', this.customAccent);
    this.currentTheme = this.customAccent === true ? `same-palette` : `theme-500`;
  }

  changeOnlyButton() {
    console.log('changeOnlyButton : ', this.customBtn);
    this.currentTheme = this.customBtn === true ? `btn-theme-900` : `theme-500`;
  }
}
