import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  standalone: false,
  templateUrl: './add-article.html',
  styleUrl: './add-article.css'
})
export class AddArticle implements OnInit {

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  selectedFile!: File;
  //Gets called when the user selects an image
  public onFileChanged(event: any) {
    //Select File
    this.selectedFile = event.target.files[0];
    //console.log(this.selectedFile);
  }


  addArticle(articleData: any) {
    const article = new FormData();
    article.append('photo', this.selectedFile, this.selectedFile.name);
    //provider.append('imageName',this.selectedFile.name);
    article.append('id', articleData.id);
    article.append('libelle', articleData.libelle);
    article.append('prix', articleData.prix);
    article.append('provider', articleData.provider);

    this.articleService.postArticle(article).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(["/listarticles"]);
      }, error => {
        console.error(error);
        // Handle error, e.g., show an error message
      }
    );

  }
}
