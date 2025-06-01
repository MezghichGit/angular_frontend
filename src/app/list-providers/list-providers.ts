import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider';
import { Provider } from '../Models';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
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
    this.providerService.getAllProviders().subscribe({
      next: (data) => {
        this.providers$.next(data);
        this.isLoading$.next(false);
      },
      error: (err) => {
        console.error('Erreur récupération providers', err);
        this.isLoading$.next(false);
      }
    });
  }

  deleteProvider(id:number) {
    alert("Provider Deleted")
  }

  updateProvider(id:number) {
    alert("Provider Updated")
     this.router.navigate(["/updateprovider",id]);
  }

  detailsProvider(id:number){
    this.router.navigate(["/detailsprovider",id]);
  }

  addProvider() {
    this.router.navigate(["/addprovider"]);
  }

}
