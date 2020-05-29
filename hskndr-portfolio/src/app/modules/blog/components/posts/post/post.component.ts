import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { PostI } from '../../../shared/post.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public post$: Observable<PostI>;
  constructor(
    private route: ActivatedRoute,
    private postSvc: PostService,
  ) { }

  ngOnInit(): void {
    //Esto recupera el id del post
    const idPost = this.route.snapshot.params.id;
    this.post$ = this.postSvc.getOnePost(idPost);
  }

}
