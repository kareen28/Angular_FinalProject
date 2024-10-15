import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent  {
  selectedCategory:string="";

constructor(){ this.selectedCategory="ALL";}

ngOnInit(): void {
}
setCategory(sidebar:string){
  this.selectedCategory=sidebar;
}

  
}
