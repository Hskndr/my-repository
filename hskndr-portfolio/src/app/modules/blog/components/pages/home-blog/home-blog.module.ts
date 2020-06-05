import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-blog-routing.module';
import { HomeBlogComponent } from './home-blog.component';
import { MaterialModule } from '../../../../../material.module';
import { BlogModule } from '../../../blog.module';
import { PostComponent } from '../../posts/post/post.component';


@NgModule({
  declarations: [HomeBlogComponent, PostComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    BlogModule
  ],
})
export class HomeBlogModule { }
