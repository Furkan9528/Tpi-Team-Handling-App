import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '@team-handling/teams/models/team';
import { TeamService } from '@team-handling/teams/services/team.service';


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list-page.component.html',
  styleUrls: ['./team-list-page.component.css']
})
export class TeamListPageComponent implements OnInit {

  public teams: Team[];

  constructor(private teamService: TeamService){}
   
  ngOnInit(){
    this.getTeams();
  }

  public getTeams(): void{
    this.teamService.getTeams().subscribe(
      (response: Team[])=>{
        this.teams = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

}
