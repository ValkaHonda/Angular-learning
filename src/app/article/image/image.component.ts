import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../data/Article';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() currentArticle:Article;
  imgUrl:String;
  constructor() { }

  ngOnInit() {
  }

  
  ngOnChanges(changes) {
    if(this.currentArticle != null){
      this.imgUrl = this.currentArticle.imgUrl;
    }
  }
}
