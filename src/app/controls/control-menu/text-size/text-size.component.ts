import { Component, OnInit, EventEmitter, Output,} from '@angular/core';


@Component({
  selector: 'app-text-size',
  templateUrl: './text-size.component.html',
  styleUrls: ['./text-size.component.css']
})
export class TextSizeComponent implements OnInit {

  @Output() textSizeEvent = new EventEmitter<number>();
  textSize:number;


  constructor() {
    this.textSize = 30;
    this.sendTextSize();
   }

  ngOnInit() {
  }

  increaseTextSize(){
    this.textSize++;
    this.sendTextSize();
  }
  decreaseTextSize(){
    this.textSize--;
    this.sendTextSize();
  }
  sendTextSize(){
    this.textSizeEvent.emit(this.textSize);
  }
}
