import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../models/team';
import {environment} from '@team-handling-env/environment';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }


  public getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(`${environment.backendPath}/teams`);
  }

  public addTeams(team: Team): Observable<Team> {
    return this.http.post<Team>(`${environment.backendPath}/teams/add`,team);
  }

  public updateTeams(team: Team): Observable<Team> {
    return this.http.put<Team>(`${environment.backendPath}/teams/update`,team);
  }

  public deleteTeams(teamId: number): Observable<void> {
    return this.http.delete<void>(`${environment.backendPath}/teams/delete/${teamId}`);
  }

}
