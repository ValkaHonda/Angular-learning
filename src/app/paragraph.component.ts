import { Component } from '@angular/core';

@Component({
  selector: 'text-paragraph',
  templateUrl: './paragraph.component.html',
})
export class ParagraphComponent {
    name:String;
    constructor(){
        this.name = 'Valka';
    }
  }