import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  isShow = true;

  toggleDisplay(){
    this.isShow = !this.isShow;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
