import {ChangeDetectorRef, Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-reactive-dinamico',
	templateUrl: './reactive-dinamico.component.html',
	styleUrls: ['./reactive-dinamico.component.css']
})
export class ReactiveDinamicoComponent {

	@ViewChild('texto') texto: TemplateRef<any>;
	tempData;
	form: FormGroup;

	constructor(private changeDetector: ChangeDetectorRef, private fb: FormBuilder) {
		this.tempData = [
			{
				nombre: 'name1',
				placeholder: 'Nombre',
				tipo: 'texto'

			},
			{
				nombre: 'name2',
				placeholder: 'Nombre',
				tipo: 'texto'
			}
		];

		this.form = this.fb.group({});

		this.tempData.forEach( (item) => {
			this.form.addControl(item.nombre, new FormControl('', [Validators.required, Validators.minLength(5) ]));
		});
	}

	ngAfterViewChecked() { this.changeDetector.detectChanges(); }

	ngAfterViewInit() {
		this.tempData.forEach( (item) => {
			item.template = this[item.tipo];
		});
	}

}
