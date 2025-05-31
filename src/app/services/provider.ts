import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Provider {

  constructor(private http:HttpClient) { }


  getAllProviders()
  {
    return this.http.get("http://127.0.0.1:8081/api/providers/list")
  }
}
