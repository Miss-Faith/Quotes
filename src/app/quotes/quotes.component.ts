import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [
    new Quote("Mi Amor","The big lesson in life, baby, is never be scared of anyone or anything.", "Frank Sinatra")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
