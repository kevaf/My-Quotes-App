import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { TimePassedPipe } from './time-passed.pipe';
import { FooterComponent } from './footer/footer.component';
import { HighlightFavoriteQuoteDirective } from './highlight-favorite-quote.directive';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    NavbarComponent,
    HomePageComponent,
    QuoteDetailsComponent,
    QuoteFormComponent,
    TimePassedPipe,
    FooterComponent,
    HighlightFavoriteQuoteDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
