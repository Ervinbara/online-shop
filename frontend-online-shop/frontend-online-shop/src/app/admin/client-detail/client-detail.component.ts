import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { Client } from '../../../models/client';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponentAdmin implements OnInit {
  client: Client = new Client();
  isNewClient: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.clientService.getClient(+id).subscribe(client => this.client = client);
    } else {
      this.isNewClient = true;
    }
  }

  saveClient(): void {
    if (this.isNewClient) {
      this.clientService.createClient(this.client).subscribe(() => {
        this.router.navigate(['/admin/clients']);
      });
    } else {
      this.clientService.updateClient(this.client.id, this.client).subscribe(() => {
        this.router.navigate(['/admin/clients']);
      });
    }
  }
}
