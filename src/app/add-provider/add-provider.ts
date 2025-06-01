import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-provider',
  standalone: false,
  templateUrl: './add-provider.html',
  styleUrl: './add-provider.css'
})
export class AddProvider implements OnInit{

  constructor(private providerService:ProviderService, private router:Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  addProvider(myprovider: any) {

    this.providerService.postProvider(myprovider).subscribe(
      data=>{
          this.router.navigate(["/listproviders"]);
      },
      error=>console.log("Problème d'insertion de provider", error)
    );
    console.log(myprovider)
  }
}
