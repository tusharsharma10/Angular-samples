import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from '../signup-form/custom-validator';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})
export class PasswordFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  form = new FormGroup(
    {

      oldPassword : new FormControl('',   Validators.required , CustomValidator.passwordGet),

      newPassword: new FormControl('', [ Validators.required, Validators.minLength(7)] , CustomValidator.shouldBeUnique),

      confirmPassword: new FormControl('',[Validators.required, Validators.minLength(7)])

    }
  );



  get oldPassword(){

    return this.form.get('oldPassword');


  }


  get newPassword(){

    return this.form.get('newPassword');


  }


  get confirmPassword(){

    return this.form.get('confirmPassword');

  }


   static matchPassword(newPassword:string, confirmPassword:string): boolean{

      if(newPassword === confirmPassword)
      return true;

      else
      return false;

    }

    onSubmit(newPassword:string,confirmPassword:string){

      if(newPassword !== confirmPassword){
        this.form.setErrors({
          confirmPassword: false
        });
      }

    }

    log(ob){

      console.log(ob);
    }

}
