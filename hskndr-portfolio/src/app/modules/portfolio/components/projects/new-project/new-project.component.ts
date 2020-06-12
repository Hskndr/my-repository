import { ProjectsService } from './../../../services/projects.service';
import { Component, OnInit } from '@angular/core';
import { ProjectsI } from '../../../shared/models/project';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../../../../../components/shared/models/user.interface';
import { AuthService } from '../../../../../auth/services/auth.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  project: ProjectsI = {
    title: '',
    urlRepo: '',
    urlProject: '',
    description: '',
    image: '',
    date: 0,
    skills: '',
  };

  addState: boolean = false;
  // Auth
  public user$: Observable<User> = this.authSvc.afAuth.user;

  constructor(
    private projectSvc: ProjectsService,
    private authSvc: AuthService,
  ) { }

  ngOnInit(): void {
  }

  onSaveProject(newProjectForm: NgForm) {
    const createdAt = Date.now();
    this.project.date = createdAt;
    this.projectSvc.addProject(this.project);
    this.clearState();
  }

  addProject($event) {
    this.addState = true;
  }
  clearState() {
    this.addState = false;
  }
}
