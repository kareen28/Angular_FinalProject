export class home {
    private id : string 
    private image : string
    private description : string
    private name : string 
    constructor (id:string,name : string, image : string, description :string){
        this.id = id
        this.name=name

        this.image=image
        this.description=description
    }
    
    getid(){
        return this.id
    }
    
    getName(){
    
        return this.name
    }
    
    getimage(){
    return this.image
    }
    
    getdescription(){
        return this.description
    }
    
    }