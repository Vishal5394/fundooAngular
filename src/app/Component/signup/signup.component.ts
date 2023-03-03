import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../helpers/must-match.validator';
import { UserService } from '../services/userservice/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private formBuilder:FormBuilder, private user:UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    })
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    //   this.submitted = true;

    //   if (this.registerForm.invalid) {
    //     return;
    //   }
    //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    // }
    if (this.registerForm.valid) {
      console.log('valid data', this.registerForm.value)
      console.log("Resister Successfully")
    
      let form = {
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        service: "advanced"
      }
      this.user.register(form).subscribe((res:any)=>{
        console.log(res)
        
      }, (error: any) =>{
        console.log(error);
    })
    }else{
      console.log('invalid data', this.registerForm.value)
      console.log("No Api Call")
    }
  }
}

