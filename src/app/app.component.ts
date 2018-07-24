import { Component,NgIterable } from '@angular/core';
import { Data } from './data/data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:Data;
  constructor(){
    this.data = new Data();
  }
}
