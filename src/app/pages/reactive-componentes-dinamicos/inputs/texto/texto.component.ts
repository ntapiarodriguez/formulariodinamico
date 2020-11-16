import { Component, Input } from '@angular/core';
import { InputFormulario } from '../input-formulario';


@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html'
})
export class TextoComponent implements InputFormulario {

  @Input() data: any;
  @Input() form: any;


}