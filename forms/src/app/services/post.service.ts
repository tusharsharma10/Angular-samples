import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs';
import { AppError } from '../post/commons/app-error';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { NotFoundError } from '../post/commons/notfound-error';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public http: Http) { }

  private url = 'http://jsonplaceholder.typicode.com/posts';



  getPosts() {

    return this.http.get(this.url);

  }

  createPost(player: HTMLInputElement, val) {


    player.value = '';

    return this.http.post(this.url, JSON.stringify(val))

  }

  updatePost(player) {

    return this.http.patch(this.url + '/' + player.id, JSON.stringify({ isRead: true }));

  }

  deletePost(player) {

    return this.http.delete(this.url + '/' + player.id)
    .pipe(catchError(this.errorHandler))  

  }

  errorHandler(error: HttpErrorResponse) {  
    if (error.status === 404)   
          return throwError (new NotFoundError() ); 
    else 
          return throwError ( new AppError(error) );  
} 

}
