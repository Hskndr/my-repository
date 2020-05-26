import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { PostComponent } from './components/posts/post/post.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent

  },
  {
    path: 'post/:id',
    component: PostComponent
  },
  {
    path: 'posts',
    loadChildren: () => import('./components/posts/list-posts/list-posts.module').then(m => m.ListPostsModule)
  },

  {
    path: 'home-blog',
    loadChildren: () => import('./components/pages/home-blog/home-blog.module').then(m => m.HomeBlogModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
