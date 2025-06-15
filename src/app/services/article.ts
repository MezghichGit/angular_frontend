import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Article } from '../Models';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articleUrl =  environment.baseUrl+"articles/";

  constructor(private http:HttpClient) { }


  getAllArticles():Observable<Article[]>
  {
    return this.http.get<Article[]>(this.articleUrl)
  }

  postArticle(article:FormData){
    return this.http.post(this.articleUrl, article)
  }
}
