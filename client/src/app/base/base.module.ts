import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { MatSnackBarModule } from '@angular/material';
import { BaseAPIComponent } from './base-api/base-api.component';

@NgModule({
  declarations: [BaseComponent, BaseAPIComponent],
  imports: [
    CommonModule,
    MatSnackBarModule
  ]
})
export class BaseModule { }
