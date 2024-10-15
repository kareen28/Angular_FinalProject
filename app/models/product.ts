export class Product {
  private name : string;
  private price : number
  private image : string
  private category : string
  constructor(name : string ,price : number ,image : string, category : string  ){
    this.name = name;
    this.price = price
    this.image = image
    this.category = category
  }
  
  getname(){
    return this.name;
  }
  
      getPrice(){
        return this.price
      }
      getimage(){
        return this.image
      }
  
    getcategory(){
    return this.category
    }
  
      toString(){
        return this.name + " : " +  this.price + " : " +  this.image + " : " +  this.category
      }
  }