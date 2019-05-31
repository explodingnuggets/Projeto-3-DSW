import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { SiteRoutingModule } from './site-routing.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    SiteRoutingModule
  ]
})
export class SiteModule { }
