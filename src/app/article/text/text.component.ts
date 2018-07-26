import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../data/Article';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @Input() currentArticle:Article;
  description:String;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes) {
    if(this.currentArticle != null){
      this.description = this.currentArticle.description;
    }
  }

}
