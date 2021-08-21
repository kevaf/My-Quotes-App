import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quote: Quotes[] = [
    new Quotes(1, "Floki Vilgerðarson ", "One Must Always Think The Worst, Even Of Your Own Kin. That Way You Avoid Too Much Disappointment In Life.", "Kevin"),
    new Quotes(2,"Ragnar Lothbrok", "We fight. That is how we win, and that is how we die.", "Lois"),
   
  ];
 
 
 
 
 
  // quote: Quotes[]=[
  //   {id:1, authorName:"Floki Vilgerðarson ", quotetxt:"One Must Always Think The Worst, Even Of Your Own Kin. That Way You Avoid Too Much Disappointment In Life.", userName:"Kevin"},
  //   {id:2, authorName:"Ragnar Lothbrok", quotetxt:"We fight. That is how we win, and that is how we die.", userName:"Lois"}
  // ]
  constructor() { }

  ngOnInit() {
  }

}
