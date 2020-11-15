import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[items]',
})
export class ItemsDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
