import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;

  @Output() isDelete = new EventEmitter<boolean>();

  quoteDelete(deletenow:boolean){
    this.isDelete.emit(deletenow);
  }

  upvote(){
    this.quote.upvotes+=1;
  }
  downvote(){
    this.quote.downvotes+=1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
