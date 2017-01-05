import { Component } from '@angular/core';
// Add the RxJS Observable operators.
import './rxjs-operators';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.template.html',
})
export class AppComponent  { name = 'Angular'; }
