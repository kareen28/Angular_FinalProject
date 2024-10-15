import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
   productsA : Product[] = [
    new Product('iPhone 15 Pro Max', 3500, 'assets/product1.jpg', 'iphone'),
    new Product('Galaxy S23 Ultra', 3200, 'assets/product2.jpg','samsung' ),
    new Product('Samsung Galaxy Z Fold 5', 4300, 'assets/product3.jpg','samsung'),
    new Product('Google Pixel 8', 2400, 'assets/product4.jpg','other'),
    new Product('Samsung Galaxy A14 5G ', 2100,  'assets/product5.jpg','samsung'),
  ];

   products: Product[] = [
    new Product('iPhone 15 Pro Max', 50, 'assets/product1.jpg','iphone' ),
    new Product('Galaxy S23 Ultra',  75, 'assets/product2.jpg' ,'samsung'),
    new Product ('Galaxy Z Fold 5', 85, 'assets/product3.jpg', 'samsung' ),
    new Product('Google Pixel 8', 80, 'assets/product4.jpg', 'Other' ),
    new Product('Galaxy A14 5G',90, 'assets/product5.jpg' ,'samsung'),
    new Product('Galaxy S22 Ultra',34,'assets/Product6.jpg' , 'samsung'),
    new Product('Galaxy S22 ',55,'assets/Product7.jpg' , 'samsung'),
    new Product('Galaxy A34 ',45,'assets/product8.jpg' , 'samsung'),
    new Product('Galaxy S23', 87,'assets/product9.jpg' , 'samsung'),
    new Product('iPhone 15', 99, 'assets/product10.jpg' , 'iphone'),
    new Product('iphone 12',65, 'assets/product11.jpg' ,'iphone'),
    new Product('iphone 13 ',78, 'assets/product12.jpg' ,'iphone'),
    new Product('iphone 13 pro ', 66,'assets/product13.jpg' ,'iphone'),
    new Product('Huawei P30 Pro ',89,'assets/product14.jpg' , 'Other'),
    new Product('Huawei P30', 76,'assets/product15.jpg','Other'),
    new Product('HUAWEI P50', 75,'assets/product16.jpg','Other' )

  ];
  getproductsByCategory(category:string){
    let arr : Product[] = []
    for(let Product of this.products){
      if(Product.getcategory()==category){
      arr.push(Product)
      }
    }
    return arr;
  }
  getAllproducts(){
    let arr : Product[] = []
    for(let Product of this.products){
      arr.push(Product)
      }
      return arr;
    }
 
  getpopular(){
    return this.productsA;
  }
}