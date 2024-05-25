import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommandeService } from '../../services/commande.service';
import { Order } from '../../../models/order';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  order: Order | undefined;

  constructor(
    private route: ActivatedRoute,
    private commandeService: CommandeService
  ) { }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.commandeService.getOrderById(id).subscribe(data => {
      this.order = data;
    });
  }
}
