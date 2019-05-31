import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { SiteRoutingModule } from './site-routing.module';
import { MatTableModule, MatSnackBarModule, MatButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [ListComponent, DetailComponent, CreateComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SiteRoutingModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule
  ]
})
export class SiteModule { }
