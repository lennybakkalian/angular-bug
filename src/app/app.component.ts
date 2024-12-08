import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {of, tap} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe],
  templateUrl: './app.component.html',
})
export class AppComponent {
  request$ = of('im a response').pipe(tap(() => console.log('i did a request')))
}
