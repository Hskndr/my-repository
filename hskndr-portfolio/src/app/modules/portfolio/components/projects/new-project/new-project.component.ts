import { ProjectsService } from './../../../services/projects.service';
import { Component, OnInit } from '@angular/core';
import { ProjectsI } from '../../../shared/models/project';
import { NgForm } from '@angular/forms';

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

  constructor(
    private projectSvc: ProjectsService,
  ) { }

  ngOnInit(): void {
  }

  onSaveProject(newProjectForm: NgForm) {
    const createdAt = Date.now();
    this.project.date = createdAt;
    this.projectSvc.addProject(this.project);
  }

  addProject($event) {
    this.addState = true;
  }
  clearState() {
    this.addState = false;
  }
}
