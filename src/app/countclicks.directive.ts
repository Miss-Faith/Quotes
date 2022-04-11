import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCountclicks]'
})
export class CountclicksDirective {

  constructor(private elem:ElementRef) { }
  highlightElement() {
    this.elem.nativeElement.style.backgroundColor = 'peru';
    this.elem.nativeElement.style.color = 'black';
  }
  ngOnInit() {
    this.highlightElement();
  }
}