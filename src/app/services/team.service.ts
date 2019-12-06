import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { team } from './team'

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  url = "http://localhost:3000/";
  constructor(private http: HttpClient) {}

  getAllEvents():Observable<team[]> {
    console.log("In event list type method");
    return this.http.get<team[]>(this.url+'team');
  }

  saveEvent(t:team){
    console.log("In Register event method", t);
    return this.http.post<team[]>(this.url+'team' , t);
  }
}
