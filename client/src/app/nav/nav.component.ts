import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getUsername() {
    return sessionStorage.getItem('username');
  }

  loggedIn() {
    return (sessionStorage.getItem('logged_in') === 'true') ? true : false;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}
