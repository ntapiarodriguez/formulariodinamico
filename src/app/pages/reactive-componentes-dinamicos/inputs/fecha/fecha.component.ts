import { Component, Input, OnInit } from '@angular/core';
import { ValidadoresService } from 'src/app/services/validadores.service';
import { InputFormulario } from '../input-formulario';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css']
})
export class FechaComponent implements InputFormulario  {

  @Input() data: any;
  @Input() form: any;
  
  constructor(public validadores: ValidadoresService) { }

}
