import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators, FormControl, AbstractControl} from '@angular/forms';
import { CustomValidator } from './custom.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  productName:string;
  
  constructor(formBuilder:FormBuilder) {}

  ngOnInit(): void {
  }



   myFormGroup = new FormGroup(
  
    {
      
      sku   :   new FormControl( '', [Validators.required,CustomValidator.skuBegin], CustomValidator.shouldBeUnique),
    
      productfield : new FormControl( '', [Validators.required],CustomValidator.shouldBeUnique)


    }
   

   );

  get sku(){

    return this.myFormGroup.get('sku');


  }

 get productfield(){

  return this.myFormGroup.get('productfield');

 }

  onSubmit(f){
    console.log(f);
    
  }

}
