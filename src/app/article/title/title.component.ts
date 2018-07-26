import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../data/Article';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input() currentArticle:Article;
  title:String;
  author:String;

  constructor() { }

  ngOnInit() {
  }
  
  ngOnChanges(changes) {
    if(this.currentArticle != null){
      this.title = this.currentArticle.title;
    }
    if(this.currentArticle != null){
      this.author = this.currentArticle.author;
    }
  }
}
