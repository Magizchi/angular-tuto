import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Welcom to {{ title }}</h1>`,
  // templateUrl: './app.component.html'
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokemon-app';
}
