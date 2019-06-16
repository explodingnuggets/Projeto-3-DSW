import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule, MatSnackBarModule } from '@angular/material';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SiteModule } from './site/site.module';
import { RemoveDialogComponent } from './base/remove-dialog/remove-dialog.component';
import { BaseModule } from './base/base.module';
import { LoginModule } from './login/login.module';
import { TeatroModule } from './teatro/teatro.module';
import { PromocaoModule } from './promocao/promocao.module';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BaseModule,
    LoginModule,
    SiteModule,
    TeatroModule,
    PromocaoModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatSnackBarModule
  ],
  entryComponents: [
    RemoveDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
