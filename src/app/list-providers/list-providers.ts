import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider';
import { Provider } from '../Models';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment.development';
@Component({
  selector: 'app-list-providers',
  standalone: false,
  templateUrl: './list-providers.html',
  styleUrl: './list-providers.css'
})
export class ListProviders implements OnInit {
 providers$ = new BehaviorSubject<Provider[] | null>(null);
isLoading$ = new BehaviorSubject<boolean>(true);

  

  constructor(private providerService: ProviderService, private router: Router) {
    console.log("constructor")
  }

  ngOnInit(): void {
   this.refreshData();
  }

  // Fonction pour obtenir l'URL complète de l'image
  getImageUrl(imageName: string): string {
    return `${environment.imageUrl}${imageName}`;
  }
  
deleteProvider(id: number) {
  const confirmed = window.confirm("Êtes-vous sûr de vouloir supprimer ce fournisseur ?");
  if (!confirmed) {
    return; // L'utilisateur a annulé
  }

  this.providerService.deleteProvider(id).subscribe({
    next: () => {
      console.log("Fournisseur supprimé");
      this.refreshData(); // recharge la liste
    },
    error: (err) => {
      console.error("Erreur lors de la suppression :", err);
    }
  });
}


  updateProvider(id:number) {
   // alert("Provider Updated")
    this.router.navigate(["/updateprovider",id]);
  }

  detailsProvider(id:number){
    this.router.navigate(["/detailsprovider",id]);
  }

  addProvider() {
    this.router.navigate(["/addprovider"]);
  }

  refreshData(){
     this.providerService.getAllProviders().subscribe({
      next: (data) => {
        console.log(data)
        this.providers$.next(data);
        this.isLoading$.next(false);
      },
      error: (err) => {
        console.error('Erreur récupération providers', err);
        this.isLoading$.next(false);
      }
    });
  }
}
