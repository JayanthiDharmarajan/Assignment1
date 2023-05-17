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
    url: "https://iso.500px.com/30-striking-photos-of-beautiful-bridges-around-the-world/"
  }
  handleClick() {
    console.log("clicked the button")
  }
}
