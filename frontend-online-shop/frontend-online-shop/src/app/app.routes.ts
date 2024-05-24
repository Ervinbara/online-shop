import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {HomePageComponent} from "./home-page/home-page.component";
import {ProductDetailComponentAdmin} from "./admin/product-detail/product-detail.component";
import {ProductListComponentAdmin} from "./admin/product-list/product-list.component";
import {ClientListComponentAdmin} from "./admin/client-list/client-list.component";
import {ClientDetailComponentAdmin} from "./admin/client-detail/client-detail.component";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'products',
    component: ProductListComponent,
  },
  { path: 'admin',
    component: DashboardComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
  },
  { path: 'admin/products',
    component: ProductListComponentAdmin
  },
  { path: 'admin/products/:id',
    component: ProductDetailComponentAdmin
  },
  { path: 'admin/products/new',
    component: ProductDetailComponentAdmin
  },
  { path: 'admin/clients',
    component: ClientListComponentAdmin
  },
  { path: 'admin/clients/:id',
    component: ClientDetailComponentAdmin
  },
  { path: 'admin/clients/new',
    component: ClientDetailComponentAdmin
  },

];
