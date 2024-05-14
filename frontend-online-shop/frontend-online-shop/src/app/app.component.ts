import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {AppModule} from "./app.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet,
    AppModule
  ],
  standalone: true // Ajoutez cette ligne pour définir le composant comme autonome

})
export class AppComponent {
  title = 'frontend-online-shop';
}
