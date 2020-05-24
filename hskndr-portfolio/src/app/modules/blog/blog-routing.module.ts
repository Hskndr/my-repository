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
 /*  {
    path: 'posts',
    loadChildren: () => import('./components/posts/list-posts/list-posts.module').then(m => m.ListPostsModule)
  }, */
  {
    path: 'home',
    loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
