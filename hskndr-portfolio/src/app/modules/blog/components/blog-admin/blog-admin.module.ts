import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogAdminRoutingModule } from './blog-admin-routing.module';
import { BlogAdminComponent } from './blog-admin.component';
import { BlogModule } from '../../blog.module';


@NgModule({
  declarations: [BlogAdminComponent],
  imports: [
    CommonModule,
    BlogAdminRoutingModule,
    BlogModule
  ]
})
export class BlogAdminModule { }
