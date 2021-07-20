import { Component, OnInit } from '@angular/core';
import { AuthenticationsService } from '../authentications.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(private loginService:AuthenticationsService) { }

  ngOnInit(): void {
  }

}
