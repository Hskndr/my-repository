import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { ProjectsI } from '../shared/models/project';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projectsCollection: AngularFirestoreCollection<ProjectsI>;
  projects: Observable<ProjectsI[]>;
  projectDoc: AngularFirestoreDocument<ProjectsI>;

  constructor(
    public afsProjects: AngularFirestore,
  ) {
    // this.projects = afsProjects.collection('projects').valueChanges();
    this.projectsCollection = afsProjects.collection<ProjectsI>('projects', ref => ref.orderBy('date', 'desc'));
    this.projects = this.projectsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ProjectsI;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }

  getAllProjects() {
    return this.projects;
  }

  addProject(project: ProjectsI) {
    console.log('New Course');
    this.projectsCollection.add(project);
  }

  deleteProject(project: ProjectsI) {
    this.projectDoc = this.afsProjects.doc(`projects/${project.id}`);
    this.projectDoc.delete();
  }

  updateProject(project: ProjectsI) {
    this.projectDoc = this.afsProjects.doc(`projects/${project.id}`);
    this.projectDoc.update(project);
  }
}
