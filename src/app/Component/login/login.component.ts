import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/userservice/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
   submitted = false;
 

   constructor(private formBuilder: FormBuilder, private user:UserService, private _router:Router) { }

   ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
   })
  }
  get f() { return this.loginForm.controls; }

    onSubmit() {
    if (this.loginForm.valid) {
      console.log('valid data', this.loginForm.value)
      console.log("Login Successfully")
      this._router.navigate(['dashboard'])
    
      let loginform = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        service: "advanced"
      }
      this.user.login(loginform).subscribe((res:any)=>{
        console.log(res)
        
      }, (error: any) =>{
        console.log(error);
    })
    }else{
      console.log('invalid data', this.loginForm.value)
      console.log("No Api Call")
    }
  }
}