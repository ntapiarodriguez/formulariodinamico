import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[inputs]',
})
export class InputsDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
