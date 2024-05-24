import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service'; // Importe le service ClientService

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  clients: any[] = []; // Initialise un tableau vide pour stocker les clients

  constructor(private clientService: ClientService) { } // Injecte le service ClientService

  ngOnInit(): void {
    this.getClients(); // Appelle la méthode pour récupérer les clients au chargement du composant
  }

  getClients() {
    this.clientService.getClients().subscribe((data: any) => { // Appelle la méthode getClients() du service ClientService
      this.clients = data; // Stocke les clients récupérés dans le tableau clients
    });
  }

  deleteClient(clientId: number) {
    this.clientService.deleteClient(clientId).subscribe(() => { // Appelle la méthode deleteClient() du service ClientService
      // Supprime le client du tableau clients une fois la suppression réussie
      this.clients = this.clients.filter(client => client.id !== clientId);
    });
  }
}
