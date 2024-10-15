import { Component } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


  export class HomeComponent  {
    products = [
      { id: 1, name: 'iPhone 15 Pro Max', image: 'assets/product1.jpg',description: 'Most Powerful iPhone' },
      { id: 2, name: 'Galaxy S23 Ultra', image: 'assets/product2.jpg',description: 'best for Artists and Photographers' },
      { id: 3, name:'Samsung Galaxy Z Fold 5', image: 'assets/product3.jpg',description: 'best Folding Phone' },
      { id: 4, name: 'Google Pixel 8', image: 'assets/product4.jpg',description: 'Best Android Phone for Most People'},
      { id: 5, name: 'Samsung Galaxy A14 5G ', image: 'assets/product5.jpg' ,description: 'Best Phone Under $200'},
    ];


  }

  class Product {
    name !: string;
    image !: string;
    review !: string;
    price !: number;
  }

