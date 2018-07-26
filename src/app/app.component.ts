import { Component,NgIterable } from '@angular/core';
import { Data } from './data/data';
import { Article } from './data/Article';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articleContener:Data;
  currentArticle:Article;
  constructor(){
    this.articleContener = new Data();
  }
  receiveArticle($event){
    this.currentArticle = $event;
  }
}
