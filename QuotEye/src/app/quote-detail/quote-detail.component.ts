import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Quote } from '../quote';
import { Subject, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export interface Entry {
  customizedDate: Date;
  id: string;
}

export interface TimeSpan {
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuoteDetailComponent implements OnInit {
  // timer
  constructor(private changeDetector: ChangeDetectorRef) { }

  entries: Entry[] = [
    { id: '', customizedDate: new Date() ,}
  ];
  newId: string;

  private destroyed$ = new Subject();

  ngOnInit() {
    this.newId = 'Last checked in...';
    this.addEntry();
    
    interval(1000).subscribe(() => {
      if (!this.changeDetector['destroyed']) {
        this.changeDetector.detectChanges();
      }
    });

    this.changeDetector.detectChanges();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  
  addEntry() {
    this.entries.push({
      customizedDate: new Date(),
      id: this.newId
    });
    this.newId = '';
  }

  getElapsedTime(entry: Entry): TimeSpan {        
    let totalSeconds = Math.floor((new Date().getTime() - entry.customizedDate.getTime()) / 1000);
    
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if (totalSeconds >= 3600) {
      hours = Math.floor(totalSeconds / 3600);      
      totalSeconds -= 3600 * hours;      
    }

    if (totalSeconds >= 60) {
      minutes = Math.floor(totalSeconds / 60);
      totalSeconds -= 60 * minutes;
    }

    seconds = totalSeconds;
    
    return {
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  // Quote Delete
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  // Upvote & Downvote

  downvote = 0;
  upvote = 0;

  voteUp(){
    this.upvote = this.upvote + 1;
  }
  voteDown(){
    this.downvote = this.downvote + 1;
  }
}
