import { Component } from '@angular/core';
import { BaseAPIComponent } from 'src/app/base/base-api/base-api.component';
import { Promocao } from '../model/promocao.model';
import { MatSnackBar, MatDialog } from '@angular/material';
import { PromocaoService } from '../service/promocao.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseAPIComponent {
  private columns = ['name', 'price', 'date', 'site', 'teatro'];
  private promocoes: Promocao[];

  constructor(protected snack: MatSnackBar, protected dialog: MatDialog,
    private service: PromocaoService) {
    super(snack, dialog);
    this.refresh();
  }

  refresh() {
    this.service.read().subscribe((promocoes: Promocao[]) => {
      this.promocoes = promocoes;
    }, (err) => this.parseError(err));
  }
}
