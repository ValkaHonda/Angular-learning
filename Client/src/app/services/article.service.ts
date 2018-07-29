import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Article } from '../data/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles:Array<Article>;

  constructor(private httpClient:HttpClient) { }
  public getArticles():Array<Article>{
    this.articles = new Array();
    this.httpClient.get("http://localhost:8080/articles").subscribe(
      (data:any[]) => {
        console.log(data[0]);
        for (let i = 0; i < data.length; i++) {
          data[i];
          let article:Article = new Article(
            data[i].title,
            data[i].description,
            data[i].author,
            data[i].imgUrl
          );
          this.articles.push(article);
        }
      }
    )
    return this.articles;
  }
}
