import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NewProjectComponent } from './components/projects/new-project/new-project.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';


@NgModule({
  declarations: [PortfolioComponent, ProjectsComponent, NewProjectComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class PortfolioModule { }
