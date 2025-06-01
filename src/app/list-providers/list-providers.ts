import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider';
import { Provider } from '../Models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-providers',
  standalone: false,
  templateUrl: './list-providers.html',
  styleUrl: './list-providers.css'
})
export class ListProviders implements OnInit {
  providers: Provider[] = [];

  constructor(private providerService: ProviderService, private router: Router) {
    console.log("constructor")
  }

  ngOnInit(): void {
    console.log("ngOnInit")
    this.providerService.getAllProviders().subscribe(
      data => {
        this.providers = data
        console.log(this.providers)
      }
    );
  }

  deleteProvider() {
    alert("Provider Deleted")
  }

  updateProvider(id:number) {
    alert("Provider Updated")
     this.router.navigate(["/updateprovider",id]);
  }

  addProvider() {
    this.router.navigate(["/addprovider"]);
  }

}
