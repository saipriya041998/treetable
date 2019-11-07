import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TreeService {
  disparticle='https://5df2226b.ngrok.io/api/KB/GetArticles?getall=0&categ=';
  constructor(private http:HttpClient) { }
  getallarticles(){
    return this.http.get(this.disparticle);
  }
}
