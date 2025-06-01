import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProviderService } from '../services/provider';
import { Provider } from '../Models';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-details-provider',
  standalone: false,
  templateUrl: './details-provider.html',
  styleUrl: './details-provider.css'
})
export class DetailsProvider implements OnInit {
  id: any;
 // provider!: Provider;
  // isLoading: boolean = true;


provider$ = new BehaviorSubject<Provider | null>(null);
isLoading$ = new BehaviorSubject<boolean>(true);

  constructor(private route: ActivatedRoute, private providerService: ProviderService) { }

  ngOnInit() {
   
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('ID reçu :', this.id);

    this.providerService.getProviderById(this.id).subscribe({
      next: (data) => {
      this.provider$.next(data);
      this.isLoading$.next(false);
    },
    error: (error) => {
      console.error(error);
      this.isLoading$.next(false);
    }
    });
  }
}
