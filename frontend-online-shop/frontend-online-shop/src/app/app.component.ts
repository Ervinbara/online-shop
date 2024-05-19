import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { Carousel02Component } from './carousel-a/carousel-a.component';
import {AppModule} from "./app.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet,
    AppModule,
    MatIcon,
    Carousel02Component,
  ],
  standalone: true // Ajoutez cette ligne pour définir le composant comme autonome
})
export class AppComponent implements OnInit {
  title = 'frontend-online-shop';
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

}
