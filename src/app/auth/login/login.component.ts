import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignupComponent } from "../signup/signup.component";

function isContainQuestionmark(control:AbstractControl){
  if(control.value.includes('?')){
    return null;
  }

  return {NOContainQuestionmark : true}
}


@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [ReactiveFormsModule, SignupComponent]
})
export class LoginComponent {

  // checkEmail = ''
  // checkPassword=''
  IfCorrectAuth= false;
  IsHideAuth= false;

form = new FormGroup({
  email : new FormControl('kavindabandara94@gmail.com',{
    validators: [Validators.required, Validators.email]
  }),
  password: new FormControl('123456789?',{
    validators :[Validators.required,Validators.maxLength(6),isContainQuestionmark],
  }),
});


get isEmailValid(){
  return this.form.controls.email.invalid && this.form.controls.email.dirty && this.form.controls.email.touched
}

get isPasswordValid(){
  return this.form.controls.password.invalid && this.form.controls.password.dirty && this.form.controls.password.touched
}


onSubmit(){
  
  // console.log(this.form.value.email)

  var checkEmail =  this.form.controls.email.value?.toString()
  var checkPassword = this.form.controls.password.value
  //  console.log(this.form.controls.email)
  // console.log(this.form.controls.email.value?.toString())

  if(checkEmail =="kavindabandara94@gmail.com" && checkPassword=="123456789?" ){
    this.IfCorrectAuth = true;
    
    
  }

  console.log(this.IfCorrectAuth)
}
































//   onSubmit(formData:NgForm){
// if(formData.form.invalid){
// return;
// }

// const enterdEmail = formData.form.value.email
// const enterdPassword = formData.form.value.password
// console.log(formData)
// // console.log(enterdEmail)
// // console.log(enterdPassword)
// formData.form.reset();
//   }

}
