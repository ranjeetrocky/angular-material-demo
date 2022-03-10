import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-material-demo';
  notifications = 2;
  zeronotifications = 2;
  progress = 0;
  constructor() {
    setInterval(() => {
      this.progress <= 100 ? this.progress++ : (this.progress = 0);
    }, 16);
  }
}
