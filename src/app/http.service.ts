import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = 'http://localhost:3000/api/'; 

  constructor(private http: HttpClient) { }

  SearchBackend(query:string) {
    let finalUrl = this.url+query;
    return this.http.get(finalUrl, {responseType: 'text'}); 
  }


}
