import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { NewPostModule } from './components/posts/new-post/new-post.module';

import { BlogComponent } from './blog.component';
import { NewPostComponent } from './components/posts/new-post/new-post.component';
import { PostComponent } from './components/posts/post/post.component';
import { MaterialModule } from '../../material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { EditPostComponent } from './components/posts/edit-post/edit-post.component';
import { EditPostModule } from './components/posts/edit-post/edit-post.module';


@NgModule({
  declarations: [
    BlogComponent,
    NewPostComponent,
    PostComponent,
    ToolbarComponent,
    ContainerAppComponent,
    ModalComponent,
    EditPostComponent,
  ],
  entryComponents: [ModalComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    NewPostModule,
    MaterialModule,
    ReactiveFormsModule,
    EditPostModule,
  ],
  exports: [ToolbarComponent]
})
export class BlogModule { }
