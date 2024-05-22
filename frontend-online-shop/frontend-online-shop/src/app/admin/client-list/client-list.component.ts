import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../../models/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponentAdmin implements OnInit {
  clients: Client[] = [];

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe(clients => this.clients = clients);
  }


  deleteClient(id: number): void {
    this.clientService.deleteClient(id).subscribe(() => {
      this.clients = this.clients.filter(client => client.id !== id);
    });
  }

  addClient(): void {
    this.router.navigate(['/admin/clients/new']);
  }

  editClient(id: number): void {
    this.router.navigate(['/admin/clients', id]);
  }

}
