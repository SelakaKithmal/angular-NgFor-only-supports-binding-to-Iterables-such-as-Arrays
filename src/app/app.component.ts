import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  public paymentOptions = [
    {
      key: 'COD',
      value: 'COD',
    },
    {
      key: 'ONLINE',
      value: 'ONLINE',
    },
  ];

  public paymentOptions3 = {};
}
