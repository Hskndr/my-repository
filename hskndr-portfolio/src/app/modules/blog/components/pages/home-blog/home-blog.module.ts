import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-blog-routing.module';
import { HomeBlogComponent } from './home-blog.component';
import { MaterialModule } from '../../../../../material.module';
import { BlogModule } from '../../../blog.module';


@NgModule({
  declarations: [HomeBlogComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    BlogModule
  ],
})
export class HomeBlogModule { }
