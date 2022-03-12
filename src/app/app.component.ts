import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, Observable, startWith } from 'rxjs';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

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
  today = new Date();
  weekAgo = new Date(Date.now() - 6 * 86400 * 1000);

  _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  constructor(private snackbar: MatSnackBar, public dialog: MatDialog) {
    console.log(new Date(Date.now()));
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
  showSnackBar(message: string, action: string) {
    let snackbarRef = this.snackbar.open(message, action, { duration: 2000 });
    snackbarRef.afterDismissed().subscribe(() => {
      console.log('Snackbar is Dismissed');
    });
    snackbarRef.onAction().subscribe(() => {
      console.log('Snackbar action was triggered');
    });
  }
  showCustomSnackBar(message: string, action: string) {
    this.snackbar.openFromComponent(customSnackbarComponent, {
      duration: 2000,
    });
  }
  showDialog() {
    let dialogRef = this.dialog.open(DialogExampleComponent, {
      data: { name: 'Manan' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result : ${result}`);
    });
  }
}

@Component({
  selector: 'custom-snackbar',
  template: '<span style="color:orange">Custom Snackbar</span>',
})
export class customSnackbarComponent {}
