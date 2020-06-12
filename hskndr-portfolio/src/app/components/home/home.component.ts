import { Component, OnInit } from '@angular/core';
import { ProjectsI } from '../../modules/portfolio/shared/models/project';
import { ProjectsService } from '../../modules/portfolio/services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public projects: ProjectsI[];
  constructor(
    private projectsSvc: ProjectsService,
  ) { }

  ngOnInit() {
    this.projectsSvc.getAllProjects().subscribe(projectsS => {
      this.projects = projectsS;
    });
  }

}
