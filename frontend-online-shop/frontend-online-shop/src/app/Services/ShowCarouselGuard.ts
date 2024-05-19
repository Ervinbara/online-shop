import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShowCarouselGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    if (url === '/' || url === '/products') {
      return true; // Afficher le carousel sur la page d'accueil et de liste des produits
    } else {
      this.router.navigate(['/']); // Rediriger vers la page d'accueil si l'URL n'est pas valide
      return false; // Ne pas afficher le carousel sur d'autres pages
    }
  }
}
