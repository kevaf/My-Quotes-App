import { Directive, Input, ElementRef } from '@angular/core';
import { Quotes } from './quotes';

@Directive({
  selector: '[appHighlightFavoriteQuote]'
})
export class HighlightFavoriteQuoteDirective {

  quote:Quotes;
  @Input()defaultcolor:string;
  @Input("highlightfav")highlightcolor:string;

  constructor(private element:ElementRef) {
    this.highlight(this.highlightcolor||this.defaultcolor||"blue")
   }
   private highlight(color:string){
     this.element.nativeElement.style.backgroundColor=color;
   }

}
