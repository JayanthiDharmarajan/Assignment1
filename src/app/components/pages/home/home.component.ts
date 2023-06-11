import { Component } from '@angular/core';
import { Card } from 'src/app/model/card.model';
import { cardData } from 'src/app/components/card/card.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   cards: Card[] = cardData;
}
