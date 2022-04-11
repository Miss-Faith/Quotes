import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1,"Mi Amor","The big lesson in life, baby, is never be scared of anyone or anything.", "Frank Sinatra", new Date(2021,17,12),0,0),
    new Quote(2,"Mi Amor","The big lesson in life, baby, is never be scared of anyone or anything.", "Frank Sinatra", new Date(2021,17,12),0,0),
    new Quote(3,"Mi Amor","The big lesson in life, baby, is never be scared of anyone or anything.", "Frank Sinatra", new Date(2021,17,12),0,0)
  ];

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.publishedDate = new Date(quote.publishedDate)
    this.quotes.push(quote)
  }

  deleteQuote(isDelete, index){
    if (isDelete) {
      this.quotes.splice(index,1);
    }
  }

  highlighter(index){
    let check = this.quotes[index].upvotes;
    if(this.quotes.length > 0) {
      let votes = [];
     this.quotes.forEach(quote => votes.push(quote.upvotes));
     if (check === Math.max(...votes)) {
      return true;
      } 
    }
  }

  toggleDetails(index){
    this.quotes[index].showMore = !this.quotes[index].showMore;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
