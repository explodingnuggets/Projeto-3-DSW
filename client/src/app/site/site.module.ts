import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { SiteRoutingModule } from './site-routing.module';
import { MatTableModule, MatSnackBarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SiteRoutingModule,
    MatSnackBarModule,
    MatTableModule
  ]
})
export class SiteModule { }
