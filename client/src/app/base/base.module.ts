import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    MatSnackBarModule
  ]
})
export class BaseModule { }
