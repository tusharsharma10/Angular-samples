import { Component, OnInit } from '@angular/core';
import { of, interval, fromEvent, pipe, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-learn-observable',
  templateUrl: './learn-observable.component.html',
  styleUrls: ['./learn-observable.component.css']
})
export class LearnObservableComponent implements OnInit {

  constructor() {
    // this.method1();
    // this.method2();
    // this.method3();
  }

  ngOnInit(): void {
      this.method7();
  }

  // Creating custom observable and observer
  method7() {


    const observable = Observable.create( observer => {

      let count = 0;

      setInterval( () => {
        // emitting data in 1 second
        observer.next(count);

        if (count > 3)
        // throwing an error  
        observer.error(new Error('Count is greater than 3'));

        if(count == 2)
        observer.complete();
        count++;
      }, 1000);

    });

    observable.subscribe(

      (data) => {
        console.log(data);

      } ,

      (error) => {
        alert(error.message);
      },

      (complete)=> {console.log('Completed'); }

    );

  }





  obs = of(1, 2, 3);

  method1() {

    this.obs.subscribe(x => {

      console.log(x);

    });
  }


  method2() {

    const observer = interval(1000);

    observer.subscribe((n) => {
      console.log(`It's been ${n} seconds since subscribing`);
    });

  }

  // creating observable from event
  method3(btn) {

    //const el = document.getElementById('pid');

    // Create an Observable that will publish mouse movements
    const mouseMoves = fromEvent(btn, 'click');

    // Subscribe to start listening for mouse-move events
    const subscription = mouseMoves.subscribe((evt) => {
      // Log coords of mouse movements
      console.log('Corona', evt);

      // When the mouse is over the upper-left of the screen,
      // unsubscribe to stop listening for mouse movements

    });
  }


  method5() {
    const nums = of(1, 2, 3);

    const squareValues = map((val: number) => val * val);
    const squaredNums = squareValues(nums);

    squaredNums.subscribe(x => console.log(x));
  }

  method6() {

    // of returns an Observable
    const nums = of(1, 2, 3, 4, 5);

    // Create a function that accepts an Observable.
    const squareOddVals = pipe(filter((n: number) => n % 2 !== 0), map(n => n * n));




    // Create an Observable that will run the filter and map functions
    const squareOdd = squareOddVals(nums);

    // Subscribe to run the combined functions
    squareOdd.subscribe(x => console.log(x));
  }

  


}
