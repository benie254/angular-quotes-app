import { Quote } from '../quote';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  downvote = 0;
  upvote = 0;

  voteUp(){
    this.upvote = this.upvote + 1;
  }
  voteDown(){
    this.downvote = this.downvote + 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
