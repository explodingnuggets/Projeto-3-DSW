import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { SiteRoutingModule } from './site-routing.module';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    SiteRoutingModule,
    MatTableModule
  ]
})
export class SiteModule { }
