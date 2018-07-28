import { Component,NgIterable, Injectable } from '@angular/core';
import { Data } from './data/data';
import { Article } from './data/Article';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from './article/article-service/article.service';
import { Services } from '../../node_modules/@angular/core/src/view';



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
  articles:Array<any>;
  constructor(private http: HttpClient){
    this.articleContener = new Data();
    this.show = false;
    this.textColor = "black";
    this.textBackgroundColor = "green";
    this.textSize = 30;
    console.log(http.get("http://localhost:8080/articles").forEach(a=>console.log(a))); // so far so good
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
