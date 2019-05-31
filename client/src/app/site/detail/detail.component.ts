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
    });
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
}
