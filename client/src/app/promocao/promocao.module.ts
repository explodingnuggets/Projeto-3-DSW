import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule, MatTableModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatDialogModule } from '@angular/material';
import { PromocaoRoutingModule } from './promocao-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseModule } from '../base/base.module';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    PromocaoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BaseModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
  ]
})
export class PromocaoModule { }
