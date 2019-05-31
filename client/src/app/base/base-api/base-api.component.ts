import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-base-api',
  styleUrls: []
})
export class BaseAPIComponent extends BaseComponent {

  constructor(protected snack: MatSnackBar) {
    super(snack);
  }

  parseError(err: any) {
    if (err.status === 401 || err.status === 403) {
      this.errorPermission();
    } else {
      this.errorUnknown();
    }
  }

  successUpdate() {
    this.showMessage('Atualizado com sucesso');
  }

  errorPermission() {
    this.showMessage('Você não tem permissões para isso', 'OK');
  }

  errorUnknown() {
    this.showMessage('Erro desconhecido', 'OK');
  }
}
