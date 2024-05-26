import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {HomePageComponent} from "./home-page/home-page.component";
import {ProductDetailComponentAdmin} from "./admin/product-detail/product-detail.component";
import {ProductListComponentAdmin} from "./admin/product-list/product-list.component";
import {ClientListComponentAdmin} from "./admin/client-list/client-list.component";
import {ClientDetailComponentAdmin} from "./admin/client-detail/client-detail.component";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";
import {OrderListComponent} from "./admin/order-list/order-list.component";
import {OrderDetailComponent} from "./admin/order-detail/order-detail.component";
import {LogoutComponent} from "./logout/logout.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {CartComponent} from "./cart/cart.component";

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
  { path: 'admin/orders',
    component: OrderListComponent
  },
  { path: 'order-detail/:id',
    component: OrderDetailComponent
  },
  { path: 'login',
    component: LoginComponent
  },
  { path: 'register',
    component: RegisterComponent
  },
  { path: 'logout',
    component: LogoutComponent
  },
  { path: 'cart',
    component: CartComponent
  },

];
