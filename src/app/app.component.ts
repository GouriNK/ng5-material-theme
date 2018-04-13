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
  disabled = false;
  buttonElevation = 12;

  darkTheme = false;

  toggleTheme() {
    console.log('here');
    this.darkTheme = !this.darkTheme;
  }
}
