import { Component, OnInit} from '@angular/core';

import { EmpleadosService } from './Services/Empleados/empleados.service';
import { RolService } from './Services/Rol/rol.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ExamenInterciclo';

  Empleados: any;
  Rol: any;



  constructor(

    public EmpleadosService: EmpleadosService,
    public RolService: RolService
  ) {
}
ngOnInit ():void{

}


}
