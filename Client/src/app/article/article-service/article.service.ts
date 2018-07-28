import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../../data/Article';

@Injectable()
export class ArticleService {

    private url:String = "http://localhost:8080";
    private articles = [];
  constructor(private http: HttpClient) { }
  public getArticles() {
     this.http.get("url"+"/articles").forEach(data => this.articles.push(data));
     return this.articles;
  }
}