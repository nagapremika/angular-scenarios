import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  //Event binding from child component to parent component using @Output
@Output() public childEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  // Whenerver the event occurs it emits the text
fireEvent()
{
  this.childEvent.emit('Hello, Welcome to Stackroute');
}
}
