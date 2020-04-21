import { Component, OnInit } from '@angular/core';

import { PostService } from '../services/post.service';
import { AppError } from './commons/app-error';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any[] = [];

  players: any[] = [{ title: 'Messi', id: 102 }];

  constructor(public service: PostService) {



  }

  ngOnInit(): void {

    this.service.getPosts()
      .subscribe((response) => {

        this.posts = response.json();

      });

  }


  createPost(player: HTMLInputElement) {
    let val = { title: player.value }
    this.service.createPost(player, val)
      .subscribe((response) => {

        val['id'] = response.json().id;
        console.log(response);
        this.players.splice(0, 0, val);
      });




  }


  updatePost(player) {

    this.service.updatePost(player)
      .subscribe((response) => {

        console.log(response.json());
      });

  }


  deletePost(player) {

    this.service.deletePost(player)
      .subscribe((response) => {

        let index = this.players.indexOf(player);
        this.players.splice(index, 1);

      });

  }


}
