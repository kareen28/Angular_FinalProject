export class User {
     name : string
     email : string
     password : string
     gender : string
     dateofbirth : string
     image !: string
     
     

  

    constructor( fullname :  string ,email : string, parssword : string ,gender:string ,dateofbirth : string ){
      this.email = email;
      this.password = parssword
      this.name = fullname
      this.dateofbirth = dateofbirth
      this.gender=gender
      this.setImage()
    }
    getName(){
      return this.name
    }
     getemail(){
        return this.email
    }
    getparssword(){
        return this.password
    }
    getfullname(){
        return this.name
    }
    getdateofbirth(){
        return this.dateofbirth
    }
    getgender(){
        return this.gender
    }
    getimage(){
        return this.image
    }



    setemail( email:string){
         this.email=email
    }
    setparssword(parssword:string){
         this.password=parssword
    }
    setfullname(fullname:string){
         this.name=fullname
    }
    setdateofbirth(dateofbirth:string){
         this.dateofbirth=dateofbirth
    }
    setgender(gender:string){
         this.gender=gender
         this.setImage()
    }
    private setImage(){
        if(this.gender=='male')
          this.image = "/assets/user.jpg"
        if(this.gender=='female')
          this.image = "/assets/f.png"
      }

    
    toString(){
        return this.email + " : " +  this.password + " : " +  this.name + " : " + this.dateofbirth +" :"+this.gender+":"+this.image
      }

    



}