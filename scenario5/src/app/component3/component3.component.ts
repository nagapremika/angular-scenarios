import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
  // Creating a childEvent
@Output() public childEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  // The text is returned when the fireEvent() gets executed
fireEvent()
{
  this.childEvent.emit('Hello, Welcome');
}
}
