import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,`So, live your life that the fear of death can never enter your heart. Love your life, perfect your life, beautify all things in your life.`,'Chief Tecumseh','Benie',new Date(2022,6,12)),
    new Quote(2,`Tread softly because you tread on my dreams`,'William Butler Yeast','Julia K.',new Date(2022,4,11)),
    new Quote(3,`I've learned that people will forget what you said, people will forget what you did. But people will never forget how you made them feel.`,'Maya Angelou','J. Janja',new Date(2022,4,3)),
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  deleteQuote(isComplete, index){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete this quote by ${this.quotes[index].author}?`)
  
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  


  constructor() { }

  ngOnInit(): void {
  }

}
