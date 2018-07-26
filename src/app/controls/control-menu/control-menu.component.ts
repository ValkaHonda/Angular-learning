import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control-menu',
  templateUrl: './control-menu.component.html',
  styleUrls: ['./control-menu.component.css']
})
export class ControlMenuComponent implements OnInit {
  @Output() textColorEvent = new EventEmitter<String>();
  @Output() backgroundColorEvent = new EventEmitter<String>();

  textColor:String;
  textBackgroundColor:String;
  constructor() { 
    this.textColor = "black";
    this.textBackgroundColor = "Green";
  }

  ngOnInit() {
  }
  sendTextColorEvent(){
    this.textColorEvent.emit(this.textColor);
  }
  receiveColorEvent($event){
    if($event != null){
      this.textColor = $event;
      this.sendTextColorEvent();
    }
  }
  sendBackgroundColorEvent(){
    this.backgroundColorEvent.emit(this.textBackgroundColor);
  }
  receiveBackgroundColorEvent($event){
    if($event != null){
      this.textBackgroundColor = $event;
      this.sendBackgroundColorEvent();
    }
  }

}
