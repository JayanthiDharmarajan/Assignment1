import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
 tabs = [
    {
      title: 'Tab 1',
      imagePath: 'assets/images/tab1-image.jpg'
    },
    {
      title: 'Tab 2',
      imagePath: 'assets/images/tab2-image.jpg'
    },
    {
      title: 'Tab 3',
      imagePath: 'assets/images/tab3-image.jpg'
    }
  ];
}
