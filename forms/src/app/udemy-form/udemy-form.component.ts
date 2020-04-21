import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-udemy-form',
  templateUrl: './udemy-form.component.html',
  styleUrls: ['./udemy-form.component.css']
})
export class UdemyFormComponent implements OnInit {

  constructor() { }

  samplelist = [

    {id:1, name:'Development'},
    {id:2, name:'Arts'},
    {id:3, name:'Languages'}

];

  ngOnInit(): void {
  }

  // logs the ngForm i.e. NgForm object
  onSubmit(f){
    console.log(f);

   
  }

  // logs the ngModel i.e. NgModel object
  log(inpCourse){

    console.log(inpCourse);
  
  }

}
