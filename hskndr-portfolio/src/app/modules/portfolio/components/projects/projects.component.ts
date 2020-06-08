import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { ProjectsI } from '../../shared/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects: ProjectsI[];
  // edit
  editState: boolean = false;
  projectToEdit: ProjectsI;

  constructor(
    private projectsSvc: ProjectsService
  ) { }

  ngOnInit(): void {
    this.projectsSvc.getAllProjects().subscribe(projectsS => {
      this.projects = projectsS;
    });
  }

  editProject(event, project: ProjectsI) {
    this.editState = true;
    this.projectToEdit = project;
  }

  onUpdateProject(project: ProjectsI) {
    this.projectsSvc.updateProject(project);
    this.clearState();
  }

  onDeleteProject($event, project) {
    this.projectsSvc.deleteProject(project);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.projectToEdit = null;
  }
}
