import { Component, OnInit } from '@angular/core';
import { ProjectsI } from '../../modules/portfolio/shared/models/project';
import { ProjectsService } from '../../modules/portfolio/services/projects.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public projects: ProjectsI[];
  // Mat Grid List
  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 3, rows: 1, color: 'lightgreen' },
    { text: 'Three', cols: 3, rows: 1, color: 'lightpink' },

  ];

  constructor(
    private projectsSvc: ProjectsService,
  ) { }

  ngOnInit() {
    this.projectsSvc.getAllProjects().subscribe(projectsS => {
      this.projects = projectsS;
    });
  }

}
