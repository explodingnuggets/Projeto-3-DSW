import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { TeatroRoutingModule } from './teatro-routing.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    TeatroRoutingModule
  ]
})
export class TeatroModule { }
