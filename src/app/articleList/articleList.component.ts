import { Component } from '@angular/core';
import { Data } from '../data/data';


@Component({
  selector: 'article-list',
  templateUrl: './articleList.component.html',
  styleUrls: ['./articleList.component.css']
})
export class ArtComponent {
  data:Data;
  constructor(){
    this.data = new Data();
  }
}
