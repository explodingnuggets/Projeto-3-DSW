import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { MatSnackBar, MatDialog } from '@angular/material';
import { RemoveDialogComponent } from '../remove-dialog/remove-dialog.component';

@Component({
  selector: 'app-base-api',
  styleUrls: []
})
export class BaseAPIComponent extends BaseComponent {

  constructor(protected snack: MatSnackBar, protected dialog: MatDialog) {
    super(snack);
  }

  parseError(err: any) {
    if (err.status === 401 || err.status === 403) {
      this.errorPermission();
    } else {
      this.errorUnknown();
    }
  }

  deleteDialog() {
    const dialogRef = this.dialog.open(RemoveDialogComponent, {
      width: '95vw',
      maxWidth: '400px'
    });

    return dialogRef.afterClosed();
  }

  successUpdate() {
    this.showMessage('Atualizado com sucesso');
  }

  errorPermission() {
    this.showMessage('Você não tem permissões para isso', 'OK');
  }
}
