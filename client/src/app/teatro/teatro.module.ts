import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { TeatroRoutingModule } from './teatro-routing.module';
import { BaseModule } from '../base/base.module';
import { MatButtonModule, MatTableModule, MatDialogModule, MatSnackBarModule, MatCardModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { DetailComponent } from './detail/detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    TeatroRoutingModule,
    BaseModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    NgxMaskModule.forRoot()
  ]
})
export class TeatroModule { }
