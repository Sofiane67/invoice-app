import {Component} from '@angular/core';
const file = require("../api/data.json")

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'invoice-app';
}
