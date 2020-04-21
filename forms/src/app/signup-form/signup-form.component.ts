import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from './custom-validator';


@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

form = new FormGroup(

  {
    username: new FormControl('', [  
      
      Validators.required,
      Validators.minLength(1),
     
    ], CustomValidator.shouldBeUnique),
    
    
    password: new FormControl('', [
      
      Validators.required,
      Validators.minLength(7),
      CustomValidator.noSpace
    
    ])
 
  }

);


get username(){

return this.form.get('username');

}

get password(){

  return this.form.get('password');
  
  }

  log(form){
    console.log(form);
  }

  login(){
    this.form.setErrors({
      invalidLogin :true
    });
  }

}
