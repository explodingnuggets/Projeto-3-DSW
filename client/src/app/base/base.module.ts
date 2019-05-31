import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { RemoveDialogComponent } from './remove-dialog/remove-dialog.component';

@NgModule({
  declarations: [RemoveDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  entryComponents: [
    RemoveDialogComponent
  ]
})
export class BaseModule { }
