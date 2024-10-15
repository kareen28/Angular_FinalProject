import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm !: FormGroup
  constructor(private formBuilder:FormBuilder,
    private userService : UsersService,
    private router:Router) {
      this.registerForm = this.formBuilder.group({
        name : ['', Validators.required],
        email : ['', Validators.compose([Validators.required, Validators.email])],
        password : ['', Validators.compose([Validators.required, Validators.minLength(8)])],
        gender : ['', Validators.required]
      })
    }

  ngOnInit(): void {
  }

  register(){
    let name = this.registerForm.value.name
    let mail = this.registerForm.value.email
    let pass = this.registerForm.value.password
    let gender = this.registerForm.value.gender
    this.userService.register(name,mail,pass,gender,'2020-01-01')
    this.router.navigateByUrl('profile')
  }
}

