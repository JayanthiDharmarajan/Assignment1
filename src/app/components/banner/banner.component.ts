import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
banner = {
    heading: "Anthony Barnett",
    subHeading: "WEB DEVELOPER,GRAPHIC DESIGNER,PHOTOGRAPHER",
    HM: "Hire Me",
    DCV: "Download CV",
  }
  handleClick() {
    console.log("clicked the button")
  }
}
