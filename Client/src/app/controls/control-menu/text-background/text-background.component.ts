import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-background',
  templateUrl: './text-background.component.html',
  styleUrls: ['./text-background.component.css']
})
export class TextBackgroundComponent implements OnInit {
  @Output() backgroundColorEvent = new EventEmitter<String>();
  chosenColor:String;
  constructor() { }

  ngOnInit() {
  }
  getColor($event){
    if($event != null){
      this.chosenColor = $event.target.value;
      this.sendBackgroundColor();
    }
  }
  sendBackgroundColor(){
    this.backgroundColorEvent.emit(this.chosenColor);
  }

}
