import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/userservice/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user:UserService) { }

  ngOnInit(): void {
   this.forgotForm = this.formBuilder.group({
     email: ['', [Validators.required, Validators.email]],
  })
 }
 get f() { return this.forgotForm.controls; }

   onSubmit() {
  //      this.submitted = true;

  //      if (this.forgotForm.invalid) {
  //          return;
  //      }
  //      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.forgotForm.value, null, 4));
  //  }
    if (this.forgotForm.valid) {
      console.log('valid data', this.forgotForm.value)
      console.log("Resister Successfully")
    
      let form = {
        email: this.forgotForm.value.email,
        service: "advanced"
      }
      this.user.reset(form).subscribe((res:any)=>{
        console.log(res)
      }, (error: any) =>{
        console.log(error);
    })
    }else{
      console.log('invalid data', this.forgotForm.value)
      console.log("No Api Call")
    }
  }
}
