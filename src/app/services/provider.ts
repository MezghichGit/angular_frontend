import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Provider } from '../Models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  providerUrl =  environment.baseUrl+"providers/";

  constructor(private http:HttpClient) { }


  getAllProviders():Observable<Provider[]>
  {
    return this.http.get<Provider[]>(this.providerUrl)
  }

  postProvider(provider:FormData){
    return this.http.post(this.providerUrl, provider)
  }

  deleteProvider(id:number){
     return this.http.delete(this.providerUrl+id)
  }

  updateProvider(provider:Provider){
    return this.http.put(this.providerUrl+provider.id, provider)
  }

  getProviderById(id:number):Observable<Provider>{
     return this.http.get<Provider>(this.providerUrl+id)
  }
}
