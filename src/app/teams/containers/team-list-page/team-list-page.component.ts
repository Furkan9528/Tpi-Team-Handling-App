import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '@team-handling/teams/models/team';
import { TeamService } from '@team-handling/teams/services/team.service';
import { Observable } from 'rxjs';
import { TeamEditPageComponent } from '../team-edit-page/team-edit-page.component';


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list-page.component.html',
  styleUrls: ['./team-list-page.component.css'],
  providers: [TeamEditPageComponent]
})
export class TeamListPageComponent implements OnInit {

  teams: Team[];

  constructor(private teamService: TeamService, private router : Router){}
   
  ngOnInit(){
    this.getTeams();
  }

  getTeams(){
    this.teamService.getTeams().subscribe(data=>{
      this.teams=data;
    })
  }

  redirectToTeamEdit(team: Team): void {
    localStorage.setItem("id",team.id.toString());
    this.router.navigate([`update/${team.id}`]);
  }

  delete(id:number):void{
    this.teamService.deleteTeams(id)
    .subscribe(data=>{
      this.getTeams();
    })

  }

  redirectToDetail(team: Team): void {
    localStorage.setItem("id",team.id.toString());
    this.router.navigate([`teams/${team.id}/detail`]);
  }


  



  
 
 

  


}
