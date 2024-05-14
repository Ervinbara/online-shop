import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // Rediriger vers la liste des produits par défaut
  { path: 'products', component: ProductListComponent }, // Route pour la liste des produits
  { path: 'products/:id', component: ProductDetailComponent }, // Route pour afficher les détails d'un produit par son identifiant
];
