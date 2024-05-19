import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShowCarouselGuard } from './Services/ShowCarouselGuard';
import {HomePageComponent} from "./home-page/home-page.component";

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    // canActivate: [ShowCarouselGuard]
  },
  {
    path: 'products',
    component: ProductListComponent,
    // canActivate: [ShowCarouselGuard]
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
  },
];
