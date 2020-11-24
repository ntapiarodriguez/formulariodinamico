import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

interface ErrorValidate {
  [s:string]: boolean
}


@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  existeUsuario( control: FormControl ): Promise<ErrorValidate> | Observable<ErrorValidate> {

    if( !control.value ) {
      return Promise.resolve(null);
    }

    return new Promise( (resolve, reject) => {

      setTimeout(() => {
        
        if ( control.value === 'strider' ) {
          resolve({ existe: true });
        } else {
          resolve( null );
        }

      }, 3500);


    });

  }


  noHerrera( control: FormControl ): ErrorValidate {

    if ( control.value?.toLowerCase() === 'herrera' ){
      return {
        noHerrera: true
      }
    }

    return null;
  }

  passwordsIguales( pass1Name: string, pass2Name: string ) {

    return ( formGroup: FormGroup ) => {

      const pass1Control = formGroup.controls[pass1Name];
      const pass2Control = formGroup.controls[pass2Name];

      if ( pass1Control.value === pass2Control.value ) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ noEsIgual: true });
      }

    }

  }

  noValido( form: FormGroup, nombre: string ): Boolean {
    return form.get(nombre).invalid && form.get(nombre).touched;
  }

  crearValidadores( data: any ) : ValidatorFn[] {
    const validators = new Array<ValidatorFn>();
	for (let validacion in data.validaciones) {
		switch (validacion) {
			case 'requerido':
			validators.push(Validators.required);
			break;
			case 'minimo':
			validators.push(Validators.minLength(parseInt(data.validaciones[validacion], 10)));
			break;
		}
	}
	return validators;
  }

}
