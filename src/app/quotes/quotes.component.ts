import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quote: Quotes[] = [
    new Quotes(1, "Floki Vilgerðarson ", '"One Must Always Think The Worst, Even Of Your Own Kin. That Way You Avoid Too Much Disappointment In Life."', "Kevin", new Date(2020,3,14)),
    new Quotes(2,"Ragnar Lothbrok", '"We fight. That is how we win, and that is how we die."', "Lois", new Date(2020,10,24)),
   
  ];

  createNewQuote(quotes:any){
    quotes.authorName=quotes.authorName;
    quotes.quoteDescription=quotes.quoteDescription;
    quotes.userName=quotes.userName;
    this.quote.push(quotes);
  }

  deleteQuote(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].quoteDescription}?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }
  upvoteQuote(index:any){
    this.quote[index].upvote++;
  }
  downvoteQuote(index:any){
    this.quote[index].downvote++;
  }
  highlightfavorite(){
    let favcolor=new Quotes(0,"","","",new Date());
    for(let i =0; i<this.quote.length; i++){
      if(this.quote[i].upvote>favcolor.upvote){
        favcolor=this.quote[i]
      }
    }
    if(favcolor.upvote>0){
      return favcolor;
    }
    else{
      return;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
