import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-color',
  templateUrl: './text-color.component.html',
  styleUrls: ['./text-color.component.css']
})
export class TextColorComponent implements OnInit {
  @Output() textColorEvent = new EventEmitter<String>();
  chosenColor:String;
  constructor() { }

  ngOnInit() {
  }

  getColor($event){
    // console.log($event.target.value); // this works!!!!
    this.chosenColor = $event.target.value;
    this.sendTextColor();
  }
  sendTextColor(){
    this.textColorEvent.emit(this.chosenColor);
  }
}
