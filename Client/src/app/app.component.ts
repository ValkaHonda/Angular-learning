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
  articleContener:Data;
  articles:Array<Article>;
  currentArticle:Article;
  textColor:String;
  textBackgroundColor:String;
  textSize:number;
  
  number:any;
  constructor(private articleService:ArticleService){
    this.articleContener = new Data();
    this.articles = this.articleService.getArticles();
    this.articleContener.items = this.articles;
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
