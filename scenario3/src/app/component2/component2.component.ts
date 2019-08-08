import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  // Reads the parentdata from parent component and assigns to name
@Input('parentdata') public name
  constructor() { }

  ngOnInit() {
  }


}
