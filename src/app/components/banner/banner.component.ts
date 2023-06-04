import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
banner = {
    heading: "Welcome to the Job Portal",
    subHeading: "The only way to do great work is to love what you do",
  }
}
