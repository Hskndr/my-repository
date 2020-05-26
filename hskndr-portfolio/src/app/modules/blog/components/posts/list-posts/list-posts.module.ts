import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPostsRoutingModule } from './list-posts-routing.module';
import { ListPostsComponent } from './list-posts.component';
import { BlogModule } from '../../../blog.module';


@NgModule({
  declarations: [ListPostsComponent],
  imports: [
    CommonModule,
    ListPostsRoutingModule,
    BlogModule
  ]
})
export class ListPostsModule { }
