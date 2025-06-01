import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider';
import { Provider } from '../Models';

@Component({
  selector: 'app-list-providers',
  standalone: false,
  templateUrl: './list-providers.html',
  styleUrl: './list-providers.css'
})
export class ListProviders implements OnInit {
providers: Provider[]=[];

  constructor(private providerService: ProviderService) {
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

  deleteProvider()
  {
    alert("Provider Deleted")
  }

  updateProvider()
  {
    alert("Provider Updated")
  }

}
