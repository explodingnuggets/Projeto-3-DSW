import { Component } from '@angular/core';
import Teatro from '../model/teatro.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  private columns = ['name', 'cnpj', 'city'];
  private teatros: Teatro[] = [
    {
      name: 'hi',
      cnpj: 'adasdas',
      city: 'São Carlos'
    }
  ];

  constructor() { }

}
