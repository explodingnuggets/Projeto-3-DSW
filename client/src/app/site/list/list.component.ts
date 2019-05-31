import { Component, OnInit } from '@angular/core';
import { Site } from '../models/site.model';
import { SiteService } from '../services/site.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  columns: string[] = ['name', 'url', 'phone'];
  sites: Site[];

  constructor(private siteService: SiteService, private snackbar: MatSnackBar) {
  }

  ngOnInit() {
    this.refreshList();
  }

  refreshList() {
    this.siteService.list().subscribe((data: Site[]) => {
      this.sites = data;
    }, (err) => {
      if (err.status === 401 || err.status === 403) {
        this.showError('Você não tem permissão para ver isso', 'OK');
      } else {
        this.showError('Erro desconhecido', 'OK');
      }
    });
  }

  showError(message: string, action?: string) {
    this.snackbar.open(message, action, {
      duration: 5000
    });
  }
}
