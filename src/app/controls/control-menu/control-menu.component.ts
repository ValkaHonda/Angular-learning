import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-menu',
  templateUrl: './control-menu.component.html',
  styleUrls: ['./control-menu.component.css']
})
export class ControlMenuComponent implements OnInit {
  textColor:String;
  constructor() { 
    this.textColor = "black";
  }

  ngOnInit() {
  }
  receiveColorEvent($event){
    if($event != null){
      this.textColor = $event;
      console.log($event);
    }
  }

}
