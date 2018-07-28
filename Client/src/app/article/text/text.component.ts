import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../data/Article';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @Input() currentArticle:Article;
  @Input() textColor;
  @Input() backgroundColor;
  @Input() textSizeValue;

  textSize:String;
  description:String;
  truncateLimit:number;
  disableFlag:boolean;

  

  
  constructor() {
    this.disableFlag = false;
    this.truncateLimit = 250;
    this.backgroundColor = "green";
    this.textColor = "black";
    this.changeTextSize(30, "px"); // Input data
   }

  ngOnInit() {
  }
  ngOnChanges(changes) {
    if(this.currentArticle != null){
      this.description = this.currentArticle.description.substring(0,this.truncateLimit);;
      if(this.currentArticle.description.length > this.truncateLimit){
        this.description += '...';
      }   
    }
    if(this.textSizeValue != null){
      this.changeTextSize(this.textSizeValue,"px");
    }
  }
  readMore(){
    this.updateDescriptionSize();
  }
  updateDescriptionSize(){
    if(this.truncateLimit >  this.currentArticle.description.length){
      this.description = this.description.substring(0, this.description.length - 4);
      this.disableFlag = true;

    } else{
      this.truncateLimit+=250;
      this.description =  this.currentArticle.description.substring(0,this.truncateLimit);
      this.description += '...';
    }
  }
  disable(){
    return this.disableFlag;
  }
  changeTextSize(size:number, measure:String){
    this.textSize = String(size) + measure;
  }

}
