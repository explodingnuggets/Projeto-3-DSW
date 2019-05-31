import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Site } from '../models/site.model';
import { SiteService } from '../services/site.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  site: Site;
  siteForm = new FormGroup({
    name: new FormControl(''),
    url: new FormControl(''),
    phone: new FormControl('')
  });

  constructor(private siteService: SiteService, private route: ActivatedRoute,
    private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.refreshData(params.get('id'));
    });
  }

  update() {
    this.siteService.update(this.site.id.toString(), {
      name: this.siteForm.get('name').value,
      url: this.siteForm.get('url').value,
      phone: this.siteForm.get('phone').value
    }).subscribe((data) => {
      this.updateSuccess();
      this.refreshData();
    }, (err) => {
      if (err.status === 401 || err.status === 403) {
        this.permissionError();
      } else {
        this.unknownError();
      }
    });
  }

  delete() {
    this.siteService.delete(this.site.id.toString()).subscribe(() => {
      this.router.navigate(['/site']);
    }, (err) => {
      if (err.status === 401 || err.status === 403) {
        this.permissionError();
      } else {
        this.unknownError();
      }
    });
  }

  refreshData(id?: string) {
    this.siteService.get(id || this.site.id.toString()).subscribe((data: Site) => {
      this.site = data;
      this.siteForm.setValue({
        name: this.site.name,
        url: this.site.url,
        phone: this.site.phone
      });
    }, (err) => {
      if (err === 401 || err === 403) {
        this.permissionError();
      } else {
        this.unknownError();
      }
    });
  }

  updateSuccess() {
    this.showMessage('Atualizado com sucesso');
  }

  permissionError() {
    this.showMessage('Você não tem permissão para ver isso', 'OK');
  }

  unknownError() {
    this.showMessage('Erro desconhecido', 'OK');
  }

  showMessage(message: string, action?:string) {
    this.snackBar.open(message, action, {
      duration: 3000
    });
  }
}
