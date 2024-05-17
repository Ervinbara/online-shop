import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CarouselComponent,
  CarouselControlComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ThemeDirective
} from '@coreui/angular';

@Component({
  selector: 'app-carousel-a',
  templateUrl: './carousel-a.component.html',
  styleUrls: ['./carousel-a.component.scss'],
  standalone: true,
  imports: [ThemeDirective, CarouselComponent, CarouselInnerComponent, NgFor, CarouselItemComponent, CarouselControlComponent, RouterLink]
})
export class Carousel02Component implements OnInit {

  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides[0] = {
      src: '../assets/images/slide_1.jpg'
    };
    this.slides[1] = {
      src: '../assets/images/slide_1.jpg'
    };
    this.slides[2] = {
      src: '../assets/images/slide_1.jpg'
    };
  }
}
