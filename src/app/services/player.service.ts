import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { player } from './player'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  url = "http://localhost:3000/player";
  constructor(private http: HttpClient) {}

  getAllPlayer():Observable<player[]> {
    console.log("In player list type method");
    return this.http.get<player[]>(this.url);
  }

  getAllPlayerForBid():Observable<player[]> {
    console.log("In player bid list type method");
    return this.http.get<player[]>(this.url+"/bid");
  }

  savePlayer(p:player){
    console.log("In Register players method", p);
    return this.http.post<player[]>(this.url , p);
  }

}
