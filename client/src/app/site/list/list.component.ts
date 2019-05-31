import { Component } from '@angular/core';
import { BaseAPIComponent } from 'src/app/base/base-api/base-api.component';
import { MatSnackBar } from '@angular/material';
import Site from '../model/site.model';
import { SiteService } from '../service/site.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseAPIComponent {
  private columns = ['name', 'url', 'phone'];
  private sites: Site[];

  constructor(protected snack: MatSnackBar, private service: SiteService) { 
    super(snack);
    this.refresh();
  }

  refresh() {
    this.service.read().subscribe((sites: Site[]) => {
      this.sites = sites;
    }, (err) => this.parseError(err));
  }
}
