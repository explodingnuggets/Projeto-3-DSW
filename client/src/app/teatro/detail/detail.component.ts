import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BaseAPIComponent } from 'src/app/base/base-api/base-api.component';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { TeatroService } from '../service/teatro.service';
import Teatro from '../model/teatro.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent extends BaseAPIComponent implements OnInit {
  private id: string;
  private teatroForm = new FormGroup({
    name: new FormControl(''),
    cnpj: new FormControl(''),
    city: new FormControl('')
  });

  constructor(protected snack: MatSnackBar, protected dialog: MatDialog,
    private router: Router, private route: ActivatedRoute,
    private service: TeatroService) {
      super(snack, dialog);
    }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.refresh();
    });
  }

  refresh() {
    if (this.id) {
      this.service.read(this.id).subscribe((teatro: Teatro) => {
        const {id, ...formData} = teatro;
        this.teatroForm.setValue(formData);
      }, (err) => this.parseError(err));
    }
  }

  create() {
    if (this.teatroForm.valid) {
      const teatro = this.teatroForm.getRawValue();

      this.service.create(teatro).subscribe((teatro: Teatro) => {
        this.router.navigate(['/teatro', teatro.id]);
      }, (err) => this.parseError(err));
    }
  }
}
