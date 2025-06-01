import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProviderService } from '../services/provider';
import { Provider } from '../Models';

@Component({
  selector: 'app-details-provider',
  standalone: false,
  templateUrl: './details-provider.html',
  styleUrl: './details-provider.css'
})
export class DetailsProvider implements OnInit {
  id: any;
  provider!: Provider;
   isLoading: boolean = true;
  constructor(private route: ActivatedRoute, private providerService: ProviderService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('ID reçu :', this.id);
    
    this.providerService.getProviderById(this.id).subscribe({
      next: (data) => {
        this.provider = data;
        console.log(this.provider);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération du provider :', error);
        this.isLoading = false;
      }
    });
  }
}
