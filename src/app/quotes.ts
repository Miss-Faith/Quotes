export class Quote {
//   push(arg0: any) {
//     throw new Error('Method not implemented.');
//   }
//   length(arg0: number, length: any) {
//     throw new Error('Method not implemented.');
//   }
//   splice(arg0: number, length: any) {
//     throw new Error('Method not implemented.');
//   }
  showMore: boolean;
  constructor(public id: number, public editor:string, public quotetext:string, public author:string, public publishedDate:Date, public upvotes: number, public downvotes: number){
    this.showMore=false;
  }
}
