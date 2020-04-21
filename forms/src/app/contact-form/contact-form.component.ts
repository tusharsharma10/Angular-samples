import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {

  constructor() { }

  // ngOnInit(): void {
  // }

  contactMethods =  [
    {id:1, name:"Ronaldo"},
    {id:2, name:"Nasri"},
    {id:3, name:"Bakayoko"},
    {id:4, name:"Deeney"},
    {id:5, name:"Khedira"},
    {id:6, name:"Xabi"},
    
  ];

  log(x){

    console.log(x);
  }

  submit(f){
    console.log(f);
  }

}
