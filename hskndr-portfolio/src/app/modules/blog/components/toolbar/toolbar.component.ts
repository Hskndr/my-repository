import { Component, OnInit } from '@angular/core';
import { AuthBlogService } from '../../shared/services/auth-blog.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    public authBlogSvc: AuthBlogService,
  ) { }

  ngOnInit(): void {
  }

  onBlogLogout(): void {
    this.authBlogSvc.logout();
  }
}
