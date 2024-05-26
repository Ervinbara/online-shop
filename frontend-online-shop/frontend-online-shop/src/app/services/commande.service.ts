import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../../models/order';  // Assurez-vous que ce chemin est correct

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private apiUrl = 'http://localhost:8080/api/orders';  // URL de votre backend Spring Boot

  constructor(private http: HttpClient) { }

  // Récupération de toutes les commandes
  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

  // Récupération d'une commande par ID
  getOrderById(id: number): Observable<Order> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Order>(url);
  }

  // Suppression d'une commande par ID
  deleteOrder(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  // Modification d'une commande
  updateOrder(id: number, order: Order): Observable<Order> {
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Order>(url, order, { headers });
  }

  // Ajout de la méthode pour créer une commande
  createOrder(order: Order): Observable<Order> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Order>(this.apiUrl, order, { headers });
  }

}
