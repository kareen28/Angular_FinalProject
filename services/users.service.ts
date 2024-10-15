import { Injectable } from '@angular/core';
import { User } from '../app/models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseURL: string = 'http://localhost:3000/users';
  headers = { 'content-type': 'application/json' };
  users : User[] = []


  constructor(private http: HttpClient) {
    this.refreshusers()
   }
  refreshusers(){
    this.getUsers().subscribe(
      (data)=>{
        this.users = data 
      }
    )
  }
  getUser(mail:string){
    for(let user of this.users){
      if(user.email == mail)
        return user
    }
    return null
  }
  login(mail:string, pass:string){
    for(let user of this.users){
      if(user.email == mail && user.password == pass){
        sessionStorage.setItem('user',mail)
        return true
      }
    }
    return false
  }
getUsers():Observable<any> {
  return this.http.get(this.baseURL)

}
adduser(user:User):Observable<any> {
  let body = JSON.stringify(user);
  return this.http.post(this.baseURL , body, {headers: this.headers,})



}

  register(name: any, mail: any, pass: any, gender: any, date:string) {
    let user = new User(name,mail,pass,gender,date)
    this.adduser(user).subscribe(
      (data)=>{
        this.refreshusers()
      }
    )
    
}


  isExist(email : string){
    for(let user of this.users){
      if(user.email==email)
        return user
    }
    return null
  }

    
}

