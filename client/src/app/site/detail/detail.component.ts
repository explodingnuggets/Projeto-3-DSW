import { Component, OnInit } from '@angular/core';
import { BaseAPIComponent } from 'src/app/base/base-api/base-api.component';
import { MatSnackBar } from '@angular/material';
import { SiteService } from '../service/site.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import Site from '../model/site.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent extends BaseAPIComponent implements OnInit {
  private id: string;
  private site: Site;
  private siteForm = new FormGroup({
    name: new FormControl(''),
    url: new FormControl(''),
    phone: new FormControl('')
  });

  constructor(protected snack: MatSnackBar, private service: SiteService,
    private router: Router, private route: ActivatedRoute) {
    super(snack);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.refresh();
    });
  }

  refresh() {
    if (this.id) {
      this.service.read(this.id).subscribe((site: Site) => {
        this.site = site;
        const {id, ...formData} = site;
        this.siteForm.setValue(formData);
      }, (err) => this.parseError(err));
    }
  }

  create() {
    if (this.siteForm.valid) {
      const site: Site = {
        ...this.siteForm.getRawValue()
      };

      this.service.create(site).subscribe((site: Site) => {
        this.router.navigate(['/site', site.id]);
      }, (err) => this.parseError(err));
    }
  }

  update() {
    if (this.siteForm.valid) {
      const site: Site = {
        ...this.siteForm.getRawValue()
      };

      this.service.update(this.id, site).subscribe((site: Site) => {
        this.successUpdate();
        this.refresh();
      }, (err) => this.parseError(err));
    }
  }
}
