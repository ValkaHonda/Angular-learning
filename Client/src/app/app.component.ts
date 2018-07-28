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
  textColor:String;
  textBackgroundColor:String;
  textSize:number;
  constructor(){
    this.articleContener = new Data();
    this.show = false;
    this.textColor = "black";
    this.textBackgroundColor = "green";
    this.textSize = 30;
  }
  receiveArticle($event){
    this.currentArticle = $event;
    this.show = true;
  }
  receivebackgroundColorEvent($event){
    if($event != null){
      this.textBackgroundColor = $event;
    }
  }
  receiveTextColorEvent($event){
    if($event != null){
      this.textColor = $event;
    }
  }
  receiveSize($event){
    if($event != null){
      this.textSize = $event;
    }
  }
}
