import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quotes'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote("","","",new Date(),0,0);
  
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
  }
false
  constructor() { }
  
  ngOnInit(): void {
  }

}
