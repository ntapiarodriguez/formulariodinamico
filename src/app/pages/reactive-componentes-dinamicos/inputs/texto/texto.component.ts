import { Component, Input } from '@angular/core';
import { ValidadoresService } from 'src/app/services/validadores.service';
import { InputFormulario } from '../input-formulario';


@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html'
})
export class TextoComponent implements InputFormulario {

  @Input() data: any;
  @Input() form: any;

  constructor(public validadores: ValidadoresService ) {}

}
