export class Quote {
  showMore: boolean;
  constructor(public editor:string, public quotetext:string, public author:string, public publishedDate:Date, public upvotes: number, public downvotes: number){
    this.showMore=false;
  }
}
