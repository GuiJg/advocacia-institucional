import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[phoneMask]'
})
export class PhoneMaskDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    let input = this.el.nativeElement;
    let value = input.value.replace(/\D/g, '');

    if (event.inputType === 'deleteContentBackward' && value.length === 0) {
      input.value = '';
      return;
    }

    if (value.length === 0) {
      input.value = ''; 
    } else if (value.length <= 2) {
      input.value = `(${value}`; 
    } else if (value.length <= 6) {
      input.value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}`; 
    } else if (value.length <= 10) {
      input.value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6, 10)}`; 
    } else {
      input.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`; 
    }
  }
}
