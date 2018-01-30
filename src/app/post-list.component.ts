import { Component, Output, EventEmitter } from '@angular/core';
import {Post} from '/post.ts';
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
     this.PostService.getAllPosts().subscribe(data => this.posts = data);
   }

   getComments(index: number): void {
     this.PostService.getCommentsForPost(number).subscribe(data => this.comments = data);
   }

   printComments(comments: Comment[]): void {
     
   }
}
