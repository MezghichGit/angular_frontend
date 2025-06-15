import { Component, OnInit } from '@angular/core';
import { Article, Provider } from '../Models';
import { BehaviorSubject } from 'rxjs';
import { ArticleService } from '../services/article';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.development';
import { ProviderService } from '../services/provider';

@Component({
  selector: 'app-list-articles',
  standalone: false,
  templateUrl: './list-articles.html',
  styleUrl: './list-articles.css'
})
export class ListArticles implements OnInit {
articles$ = new BehaviorSubject<Article[] | null>(null);
isLoading$ = new BehaviorSubject<boolean>(true);

  

  constructor(private articleService: ArticleService, private router: Router) {
    console.log("constructor")
  }

  ngOnInit(): void {
   this.refreshData();
  }

   // Fonction pour obtenir l'URL complète de l'image
    getImageUrl(imageName: string): string {
      return `${environment.imageUrl}${imageName}`;
    }
    
    refreshData(){
     this.articleService.getAllArticles().subscribe({
      next: (data) => {
        console.log(data)
        this.articles$.next(data);
        this.isLoading$.next(false);
      },
      error: (err) => {
        console.error('Erreur récupération articles', err);
        this.isLoading$.next(false);
      }
    });
  }


  addArticle(){
    this.router.navigate(["/addarticle"]);
  }

}
