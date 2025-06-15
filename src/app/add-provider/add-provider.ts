import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-provider',
  standalone: false,
  templateUrl: './add-provider.html',
  styleUrl: './add-provider.css'
})
export class AddProvider implements OnInit {

  constructor(private providerService: ProviderService, private router: Router) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  /*
    addProvider(myprovider: any) {
  
      this.providerService.postProvider(myprovider).subscribe(
        data=>{
            this.router.navigate(["/listproviders"]);
        },
        error=>console.log("Problème d'insertion de provider", error)
      );
      console.log(myprovider)
    }*/

  selectedFile!: File;
  //Gets called when the user selects an image
  public onFileChanged(event: any) {
    //Select File
    this.selectedFile = event.target.files[0];
    //console.log(this.selectedFile);
  }


  addProvider(providerData: any) {
    const provider = new FormData();
    provider.append('imageFile', this.selectedFile, this.selectedFile.name);
    //provider.append('imageName',this.selectedFile.name);
    provider.append('id', providerData.id);
    provider.append('nom', providerData.nom);
    provider.append('details', providerData.details);
    provider.append('ville', providerData.ville);
    provider.append('email', providerData.email);
    this.providerService.postProvider(provider).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(["/listproviders"]);
      }, error => {
        console.error(error);
        // Handle error, e.g., show an error message
      }
    );

  }
}
