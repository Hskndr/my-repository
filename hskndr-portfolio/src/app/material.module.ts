import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* MATERIAL MODULES */
import { MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTreeModule } from '@angular/material/tree';
import { DragDropModule } from '@angular/cdk/drag-drop';

const matModules = [
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  LayoutModule,
  MatRadioModule,
  MatRadioModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatTreeModule,
  DragDropModule,
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    matModules
  ],
  exports: [matModules]
})
export class MaterialModule { }
