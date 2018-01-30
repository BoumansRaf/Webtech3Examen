import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {PostListComponent} from './post-list.component';
import {PostService} from './post.service';
import {AppComponent} from './app.component';
import {Comment} from './comment';
import {Post} from './post';







const appRoutes: Routes = [
  { path: '**', component: PostListComponent }
];

@NgModule({
  imports:      [ BrowserModule, HttpClientModule,
                RouterModule.forRoot(appRoutes) ],
  declarations: [PostListComponent, AppComponent ],
  providers:    [PostService],
  bootstrap:    [AppComponent ]
})

export class AppModule { }
