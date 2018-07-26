import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../data/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() currentArticle:Article
  @Input() textColor;
  @Input() textBackgroundColor;
  title:String;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if(this.currentArticle != null){
      this.title = this.currentArticle.title;
    }
  }
}
