import { Component,NgIterable } from '@angular/core';
import { Data } from './data/data';
import { Article } from './data/Article';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show:boolean;
  articleContener:Data;
  currentArticle:Article;
  constructor(){
    this.articleContener = new Data();
    this.show = false;
  }
  receiveArticle($event){
    this.currentArticle = $event;
    this.show = true;
  }
}
