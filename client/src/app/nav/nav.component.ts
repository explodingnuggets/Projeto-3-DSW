import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

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
  }
}
