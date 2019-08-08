import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Component1Component } from '../component1/component1.component';


@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
public greeting;
// Event is created
@Output() public childEvent=new EventEmitter();
   constructor() { }

  ngOnInit() {
  }
  // Emits the message from the child component to other component when called 
fireEvent()
{
  this.childEvent.emit(this.greeting);
}
}
