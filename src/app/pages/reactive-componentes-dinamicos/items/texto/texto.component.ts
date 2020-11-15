import { Component, Input } from '@angular/core';
import { ItemFormulario } from '../item-formulario';


@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html'
})
export class TextoComponent implements ItemFormulario {

  @Input() data: any;
  @Input() form: any;


}
