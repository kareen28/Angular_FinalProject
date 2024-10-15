import { Component, Input } from '@angular/core';
import { ProductService } from 'src/services/product.service';
import { Product } from '../models/product';
ProductService
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
services : ProductService

  toShow : Product[ ] = [ ]

  @Input() set typeProducts(sidebar:string){
    if(sidebar=="iphone")
      this.toShow = this.services.getproductsByCategory("iphone")
    else if (sidebar=="samsung")
      this.toShow=this.services.getproductsByCategory("samsung")
    else if (sidebar=="Other")
      this.toShow=this.services.getproductsByCategory("Other")
    else if (sidebar=="ALL")
    this.toShow=this.services.getAllproducts()
      

  }



  constructor(Product:ProductService){
    this.services=Product; 

  }
  ngOnInit(): void {
  }
   
}

