import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ProviderService } from '../services/provider';
import { Provider } from '../Models';
@Component({
  selector: 'app-update-provider',
  standalone: false,
  templateUrl: './update-provider.html',
  styleUrl: './update-provider.css'
})
export class UpdateProvider implements OnInit {
  id: any;
  nom:any;
  email:any;
  details:any;
  temp:any;

  provider = new BehaviorSubject<Provider | null>(null);
  isLoading$ = new BehaviorSubject<boolean>(true);
  constructor(private route: ActivatedRoute, private providerService: ProviderService, private router:Router) {}

    ngOnInit() {
   
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('ID reçu :', this.id);

    this.providerService.getProviderById(this.id).subscribe({
      next: (data) => {
      this.provider.next(data);
      this.isLoading$.next(false);
      this.nom = this.provider.value?.nom;
      this.email = this.provider.value?.email;
      this.details = this.provider.value?.details;
    },
    error: (error) => {
      console.error(error);
      this.isLoading$.next(false);
    }
    });
  }


  updateProvider(){
    let provider:Provider={
      id:this.id,
      nom:this.nom,
      email:this.email,
      details:this.details
    }
    

    this.providerService.updateProvider(provider).subscribe(
      data=>this.router.navigate(["/listproviders"]),
      error=>console.log("Problème d'update ", error)
    );
  }
}
