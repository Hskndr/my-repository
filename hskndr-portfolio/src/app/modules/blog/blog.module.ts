import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { NewPostComponent } from './components/posts/new-post/new-post.component';
import { NewPostModule } from './components/posts/new-post/new-post.module';
import { PostComponent } from './components/posts/post/post.component';


@NgModule({
  declarations: [BlogComponent, NewPostComponent, PostComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    NewPostModule
  ]
})
export class BlogModule { }
