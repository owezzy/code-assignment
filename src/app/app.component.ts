import { Component } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <a mat-button routerLink="/home"><h1>owezzy-humanitec</h1>
      </a>
  </mat-toolbar>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'humantic-code-assignment';
}
