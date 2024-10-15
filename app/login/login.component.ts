import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit  {
  loginForm!: FormGroup;
  constructor(private formBuilder:FormBuilder, private userService : UsersService,
    private router:Router) {

  }

  ngOnInit(): void {
    this.createLoginForm()
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email : [''],
      password : ['']
    })
  }

  login(){
    
    let mail = this.loginForm.value.email
    let pass = this.loginForm.value.password
    if(this.userService.login(mail,pass))
      this.router.navigateByUrl('profile/user')
    else
      alert('ERROR')
  }

}
