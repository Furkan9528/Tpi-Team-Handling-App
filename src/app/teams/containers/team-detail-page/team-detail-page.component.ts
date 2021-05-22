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

  team :Team=new Team();


  constructor(private teamService: TeamService, private router : Router){}

  

  ngOnInit() {
    this.redirectToDetail();

  }


  redirectToDetail(){
    let id=localStorage.getItem("id");
    this.teamService.findById(+id).subscribe(
      data=>{
        this.team = data;
      })
  }


  redirectToTeamList(){
    this.router.navigate([`teams`]);
  }

  


  

  

}


