import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCountclicks]'
})
export class CountclicksDirective {

  constructor() { }

  votes = 0;

  @HostListener("click", ["$event.target"]) onClicks() {
    this.votes++
  }
 
}
