import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationsService } from '../authentications.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router,
    private authentocationService: AuthenticationsService) { }

  ngOnInit(): void {
    this.authentocationService.logOut();
    this.router.navigate(['login']);
  }



}
