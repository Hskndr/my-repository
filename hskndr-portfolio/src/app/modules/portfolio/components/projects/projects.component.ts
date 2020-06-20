import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { ProjectsI } from '../../shared/models/project';
import { Observable } from 'rxjs';
import { User } from '../../../../components/shared/models/user.interface';
import { AuthService } from '../../../../auth/services/auth.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects: ProjectsI[];
  // edit
  editState = false;
  projectToEdit: ProjectsI;
  // Auth
  public user$: Observable<User> = this.authSvc.afAuth.user;

  constructor(
    private projectsSvc: ProjectsService,
    private authSvc: AuthService,
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
