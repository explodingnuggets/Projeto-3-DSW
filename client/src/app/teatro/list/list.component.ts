import { Component } from '@angular/core';
import Teatro from '../model/teatro.model';
import { BaseAPIComponent } from 'src/app/base/base-api/base-api.component';
import { MatSnackBar, MatDialog } from '@angular/material';
import { TeatroService } from '../service/teatro.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseAPIComponent {
  private columns = ['name', 'cnpj', 'city'];
  private teatros: Teatro[];

  constructor(protected snack: MatSnackBar, protected dialog: MatDialog,
    private service: TeatroService) {
    super(snack, dialog);
    this.refresh();
  }

  refresh() {
    this.service.read().subscribe((teatros: Teatro[]) => {
      this.teatros = teatros;
    }, (err) => this.parseError(err));
  }

  filter(value: string) {
    this.service.read(undefined, value).subscribe((teatros: Teatro[]) => {
      this.teatros = teatros;
    }, (err) => this.parseError(err));
  }
}
