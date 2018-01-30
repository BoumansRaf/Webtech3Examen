import { Component, Output, EventEmitter } from '@angular/core';
import {Post} from './post';
import {Comment} from './comment';
import {PostService} from './post.service';
@Component({
   selector: 'post-list',
   templateUrl: './post-list.component.html'
})

export class PostListComponent  {
  posts: Post[];
  comments: Comment[];
   @Output() commentsFound = new EventEmitter();

   constructor(private postService: PostService) {}

   ngOnInit(): void {
     this.postService.getAllPosts().subscribe(data => this.posts = data);

   }

   getComments(index: number): void {

     this.postService.getCommentsForPost(index).subscribe(data => this.comments = data);

     this.printComments(this.comments);
   }

   printComments(commentArr: Comment[]): void {

     for (var i = 0; i < 5; i++) {
        console.log(commentArr[i].email);
        console.log(commentArr[i].name);
        console.log(commentArr[i].body);
      }
     }
   }
