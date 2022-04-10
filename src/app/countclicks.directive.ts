import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCountclicks]'
})
export class CountclicksDirective {

  constructor() { }

  numberOfClicks = 0;

  @HostListener("click", ["$event.target"]) onClicks() {
    this.numberOfClicks++
  }
 
}
