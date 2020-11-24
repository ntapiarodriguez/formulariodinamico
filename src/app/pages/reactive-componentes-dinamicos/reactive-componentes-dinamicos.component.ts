import { ChangeDetectorRef, Component, ComponentFactoryResolver, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InputsDirective } from './inputs.directive';
import { InputFormulario } from './inputs/input-formulario';
import { TextoComponent } from './inputs/texto/texto.component';
import { InputConfiguracion } from './input-configuracion';
import { ValidadoresService } from 'src/app/services/validadores.service';
import { FechaComponent } from './inputs/fecha/fecha.component';

@Component({
	selector: 'app-reactive-componentes-dinamicos',
	templateUrl: './reactive-componentes-dinamicos.component.html',
	styleUrls: ['./reactive-componentes-dinamicos.component.css']
})
export class ReactiveComponentesDinamicosComponent {

	@ViewChild(InputsDirective) inputs: InputsDirective;
	tempData: any[];
	test: any;
	form: FormGroup;

	constructor(private changeDetector: ChangeDetectorRef, private fb: FormBuilder,
		private componentFactoryResolver: ComponentFactoryResolver,
		private validadores: ValidadoresService) {

		this.form = this.fb.group({});

		this.tempData = [
			new InputConfiguracion (
				TextoComponent,
				{
					nombre: 'nombre',
					titulo: 'Nombre',
					placeholder: 'Ingrese el nombre',
					validaciones: {
						minimo: 7,
						requerido: true
					}
	
				}
			),
			new InputConfiguracion (
				TextoComponent,
				{
					nombre: 'apellido',
					titulo: 'Apellido',
					placeholder: 'Ingrese el apellido',
					validaciones: {
						minimo: 5,
						requerido: true
					}
				}
			),
			new InputConfiguracion (
				FechaComponent,
				{
					nombre: 'fecha',
					titulo: 'Fecha',
					placeholder: 'yyyy-mm-dd'
				}
			)
		];

		this.tempData.forEach((item) => {
			item.form = this.form.addControl(item.data.nombre, 
				new FormControl('', this.validadores.crearValidadores(item.data)));
		});
	}

	ngAfterViewChecked() { this.changeDetector.detectChanges(); }

	ngAfterViewInit() {
		this.tempData.forEach((item) => {
			const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);
			const viewContainerRef = this.inputs.viewContainerRef;
			const componentRef = viewContainerRef.createComponent(componentFactory);
			(<InputFormulario>componentRef.instance).data = item.data;
			(<InputFormulario>componentRef.instance).form = this.form;

		});
	}

}
