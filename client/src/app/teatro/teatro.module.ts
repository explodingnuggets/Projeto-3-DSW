import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { TeatroRoutingModule } from './teatro-routing.module';
import { BaseModule } from '../base/base.module';
import { MatButtonModule, MatTableModule, MatDialogModule, MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    TeatroRoutingModule,
    BaseModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTableModule
  ]
})
export class TeatroModule { }
