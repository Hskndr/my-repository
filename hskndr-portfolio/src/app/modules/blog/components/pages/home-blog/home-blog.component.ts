import { PostService } from '../../posts/post.service';
import { Component, OnInit } from '@angular/core';
import { PostI } from '../../../shared/post.interface';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.scss'],
})
export class HomeBlogComponent implements OnInit {

  public posts$: Observable<PostI[]>;

  constructor(private postSvc: PostService) { }

  ngOnInit(): void {
    this.posts$ = this.postSvc.getAllPosts();
  }

}
