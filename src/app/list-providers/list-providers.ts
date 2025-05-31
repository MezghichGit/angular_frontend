import { Component, OnInit } from '@angular/core';
import { Provider } from '../services/provider';

@Component({
  selector: 'app-list-providers',
  standalone: false,
  templateUrl: './list-providers.html',
  styleUrl: './list-providers.css'
})
export class ListProviders implements OnInit {

  logo:string="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png";
  providers: any;

  constructor(private provider: Provider) {
    console.log("constructor")
  }

  ngOnInit(): void {
    console.log("ngOnInit")
    this.provider.getAllProviders().subscribe(
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
