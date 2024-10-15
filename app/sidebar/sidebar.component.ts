import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output ()categorySelected : EventEmitter<string> = new EventEmitter();

  constructor () { }
  
  ngOnInit(): void{
  }
  chooseOther(){
    this.categorySelected.emit("Other");
  }
  chooseiphone(){
  this.categorySelected.emit("iphone");
  }
  choosesamsung(){
    this.categorySelected.emit("samsung");
    }
  chooseall(){
    this.categorySelected.emit("ALL");
    }
  }


