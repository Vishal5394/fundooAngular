import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
   this.forgotForm = this.formBuilder.group({
     email: ['', [Validators.required, Validators.email]],
  })
 }
 get f() { return this.forgotForm.controls; }

   onSubmit() {
       this.submitted = true;

       if (this.forgotForm.invalid) {
           return;
       }
       alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.forgotForm.value, null, 4));
   }
}
