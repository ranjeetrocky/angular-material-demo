import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

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
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  constructor() {
    setInterval(() => {
      this.progress <= 100 ? this.progress++ : (this.progress = 0);
    }, 16);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }
  log(string: string) {
    console.log(string);
  }
  logChangeTab(int: number) {
    console.log('Tab Changed to = ' + int);
  }
}
