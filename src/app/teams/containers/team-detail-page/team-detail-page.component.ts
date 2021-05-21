import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Team } from '@team-handling/teams/models/team';
import { TeamService } from '@team-handling/teams/services/team.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-team-detail-page',
  templateUrl: './team-detail-page.component.html',
  styleUrls: ['./team-detail-page.component.css']
})
export class TeamDetailPageComponent implements OnInit {

   teams: Team[];

   team$: Observable<Team> | null;


  constructor(private teamService: TeamService, private router : Router,public route: ActivatedRoute) {
}

  ngOnInit(): void {

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


