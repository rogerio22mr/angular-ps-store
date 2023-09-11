import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	@Input()
	gameCover:string = "";

	//card-label
	@Input()
	gameLabel:string = ""

	//card-pricing
	@Input()
	gameType:string = "";
	@Input()
	gamePrice:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
