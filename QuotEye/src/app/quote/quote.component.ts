import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,`Quote 1`,'Author 1','User 1',new Date(2022,4,14),20,3),
    new Quote(2,`Quote 2`,'Author 2','User 2',new Date(2022,1,15),20,3),
    new Quote(3,`Quote 3`,'Author 3','User 3',new Date(2022,2,17),20,3),
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete, index){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete the Quote:"${this.quotes[index].name}"?`)
  
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
