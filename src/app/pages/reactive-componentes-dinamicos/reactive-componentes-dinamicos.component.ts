import { ChangeDetectorRef, Component, ComponentFactoryResolver, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemsDirective } from './items.directive';
import { ItemFormulario } from './items/item-formulario';
import { TextoComponent } from './items/texto/texto.component';

@Component({
	selector: 'app-reactive-componentes-dinamicos',
	templateUrl: './reactive-componentes-dinamicos.component.html',
	styleUrls: ['./reactive-componentes-dinamicos.component.css']
})
export class ReactiveComponentesDinamicosComponent {

	@ViewChild(ItemsDirective) formulario: ItemsDirective;
	tempData;
	form: FormGroup;

	constructor(private changeDetector: ChangeDetectorRef, private fb: FormBuilder,
		private componentFactoryResolver: ComponentFactoryResolver) {
		this.tempData = [
			{
				nombre: 'name1',
				placeholder: 'Nombre',
				componente: TextoComponent,
				tipo: 'texto'

			},
			{
				nombre: 'name2',
				placeholder: 'Nombre',
				componente: TextoComponent,
				tipo: 'texto'
			}
		];

		this.form = this.fb.group({});

		this.tempData.forEach((item) => {
			this.form.addControl(item.nombre, new FormControl('', [Validators.required, Validators.minLength(5)]));
		});
	}

	ngAfterViewChecked() { this.changeDetector.detectChanges(); }

	ngAfterViewInit() {
		this.tempData.forEach((data) => {
			const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TextoComponent);
			const viewContainerRef = this.formulario.viewContainerRef;
			const componentRef = viewContainerRef.createComponent<ItemFormulario>(componentFactory);
			componentRef.instance.data = data;
			componentRef.instance.form = this.form;

		});
	}

}
