import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {AppModule} from "./app.module";
import {MatIcon} from "@angular/material/icon";
import {Carousel02Component} from "./carousel-a/carousel-a.component";

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
export class AppComponent {
  title = 'frontend-online-shop';
}
