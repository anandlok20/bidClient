import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { player } from './player'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  url = "http://localhost:3000/";
  constructor(private http: HttpClient) {}

  getAllEvents():Observable<player[]> {
    console.log("In event list type method");
    return this.http.get<player[]>(this.url+'player');
  }

  saveEvent(p:player){
    console.log("In Register event method", p);
    return this.http.post<player[]>(this.url+'player' , p);
  }

}
