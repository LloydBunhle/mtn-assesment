import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-slider-page',
  templateUrl: './slider-page.component.html',
  styleUrls: ['./slider-page.component.css']
})
export class SliderPageComponent implements OnInit {
  dragging:true;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    
    navSpeed: 700,
    navText: ['<i class="arrow fas fa-chevron-circle-left"></i>', '<i class=" arrow fas fa-chevron-circle-right"></i>'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  }
  constructor() { }
  
  startDragging(event){
    console.log(event);
  }

  ngOnInit(): void {
  }

}
