import { Component } from '@angular/core';
import { Card } from 'src/app/model/card.model';
import { cardData } from 'src/app/components/card/card.data';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
 cards: Card[] = cardData;
}
