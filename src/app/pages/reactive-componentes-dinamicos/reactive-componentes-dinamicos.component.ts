import { ChangeDetectorRef, Component, ComponentFactoryResolver, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InputsDirective } from './inputs.directive';
import { InputFormulario } from './inputs/input-formulario';
import { TextoComponent } from './inputs/texto/texto.component';
import { InputConfiguracion } from './input-configuracion';

@Component({
	selector: 'app-reactive-componentes-dinamicos',
	templateUrl: './reactive-componentes-dinamicos.component.html',
	styleUrls: ['./reactive-componentes-dinamicos.component.css']
})
export class ReactiveComponentesDinamicosComponent {

	@ViewChild(InputsDirective) inputs: InputsDirective;
	tempData;
	test;
	form: FormGroup;

	constructor(private changeDetector: ChangeDetectorRef, private fb: FormBuilder,
		private componentFactoryResolver: ComponentFactoryResolver) {

		this.form = this.fb.group({});

		this.tempData = [
			new InputConfiguracion (
				TextoComponent,
				{
					nombre: 'name1',
					placeholder: 'Nombre 1'
	
				}
			),
			new InputConfiguracion (
				TextoComponent,
				{
					nombre: 'name2',
					placeholder: 'Nombre 2'
	
				}
			)
		];

		this.tempData.forEach((item) => {
			item.form = this.form.addControl(item.data.nombre, new FormControl('', [Validators.required, Validators.minLength(5)]));
		});
	}

	ngAfterViewChecked() { this.changeDetector.detectChanges(); }

	ngAfterViewInit() {
		this.tempData.forEach((item) => {
			const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);
			const viewContainerRef = this.inputs.viewContainerRef;
			const componentRef = viewContainerRef.createComponent<InputFormulario>(componentFactory);
			componentRef.instance.data = item.data;
			componentRef.instance.form = this.form;

		});
	}

}
