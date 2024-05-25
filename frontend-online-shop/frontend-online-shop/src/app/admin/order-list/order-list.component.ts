import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../../services/commande.service';
import { Order } from '../../../models/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[] = [];

  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.commandeService.getAllOrders().subscribe(data => {
      this.orders = data;
    });
  }

  deleteOrder(id: number): void {
    this.commandeService.deleteOrder(id).subscribe(() => {
      this.orders = this.orders.filter(order => order.id !== id);
    });
  }
}
