import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteRoutingModule } from './site-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { MatSnackBarModule, MatTableModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatDialogModule } from '@angular/material';
import { DetailComponent } from './detail/detail.component';
import { RemoveDialogComponent } from '../base/remove-dialog/remove-dialog.component';
import { BaseModule } from '../base/base.module';

@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    SiteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BaseModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule
  ],
  entryComponents: [
    RemoveDialogComponent
  ]
})
export class SiteModule { }
