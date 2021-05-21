import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Team } from '../models/team';
import {environment} from '@team-handling-env/environment';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

 

  constructor(private http:HttpClient ) { }

  
 
  public getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(`${environment.backendPath}/teams`);
  }

  public addTeams(team: Team): Observable<Team> {
    return this.http.post<Team>(`${environment.backendPath}/add`,team);
  }

  public deleteTeams(team: Team): Observable<void> {
    return this.http.delete<void>(`${environment.backendPath}/`+team.id);
  }
  
  public updateTeams(team: Team): Observable<Team> {
    return this.http.put<Team>(`${environment.backendPath}/`+team.id,team);
  }

  public findById(id: number): Observable<Team> {
    const options = {params: new HttpParams().set("id", String(id))};

    return this.http.get<Team>(`${environment.backendPath}/`+id,options);  
  }  

}
