import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/userservice/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotForm!: FormGroup;
  submitted = false;
  email = 'Vishal123@gmail.com';

  constructor(private formBuilder: FormBuilder, private user: UserService, private _router: Router) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      email: ['Vishal123@gmail.com', [Validators.required, Validators.email]],
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
      console.log('valid data', this.forgotForm.value);
      console.log(" Successfully");

      let form = {
        email: this.forgotForm.value.email,
      }
      this.user.forgotPassword(form).subscribe((res: any) => {
        console.log('res', res);
      }, (error: any) => {
        console.log('error', error);
      })
    }else{
      console.log('invalid data', this.forgotForm.value)
      console.log("NO Api Call")
    }
  }
}

