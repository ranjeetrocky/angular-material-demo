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
  opened = false;
  selectedValue: any;
  options = ['Angular', 'React', 'Vue'];
  objectOptions = [
    { name: 'Angular' },
    { name: 'React' },
    { name: 'AngularMaterial' },
    { name: 'Vue' },
  ];

  constructor() {
    setInterval(() => {
      this.progress <= 100 ? this.progress++ : (this.progress = 0);
    }, 16);
  }
  log(string: string) {
    console.log(string);
  }
  logChangeTab(int: number) {
    console.log('Tab Changed to = ' + int);
  }
}
