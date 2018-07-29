import { Component,NgIterable, Injectable } from '@angular/core';
import { Data } from './data/data';
import { Article } from './data/Article';
import { ArticleService } from './services/article.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show:boolean;
  articles:Array<Article>;
  currentArticle:Article;
  textColor:String;
  textBackgroundColor:String;
  textSize:number;
 
  constructor(private articleService:ArticleService){
    this.articles = this.articleService.getArticles();
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
