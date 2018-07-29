import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Article } from '../data/Article';

@Component({
  selector: 'article-list',
  templateUrl: './articleList.component.html',
  styleUrls: ['./articleList.component.css']
})
export class ArtComponent {
  @Input() articles:Array<Article>;
  @Output() articleEvent = new EventEmitter<Article>();
  chosenArticle:Article
  choseArticle(item){
    this.chosenArticle=item;
    this.sendArticle();
  }
  sendArticle(){
    this.articleEvent.emit(this.chosenArticle);
  }
}
