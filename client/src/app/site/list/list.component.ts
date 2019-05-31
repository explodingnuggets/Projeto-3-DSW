import { Component, OnInit } from '@angular/core';
import { Site } from '../models/site.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  columns: string[] = ['name', 'url', 'phone'];
  sites: Site[] = [
    {
      url: 'ingresso.com',
      name: 'Ingresso',
      phone: '1630003000'
    },
    {
      url: 'movies.com',
      name: 'Borto Movies',
      phone: '1640004000'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
