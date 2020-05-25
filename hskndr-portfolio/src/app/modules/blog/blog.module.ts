import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { NewPostModule } from './components/posts/new-post/new-post.module';

import { BlogComponent } from './blog.component';
import { NewPostComponent } from './components/posts/new-post/new-post.component';
import { PostComponent } from './components/posts/post/post.component';
import { MaterialModule } from '../../material.module';


@NgModule({
  declarations: [BlogComponent, NewPostComponent, PostComponent, ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    NewPostModule,
    MaterialModule,

  ],
  exports: []
})
export class BlogModule { }
