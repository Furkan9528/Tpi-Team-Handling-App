import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/teams/models/team';
import { TeamService } from '@team-handling/teams/services/team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-edit-page',
  templateUrl: './team-edit-page.component.html',
  styleUrls: ['./team-edit-page.component.css'],
})
export class TeamEditPageComponent implements OnInit {

  team :Team=new Team();

  title= "Team List"


  constructor(private teamService: TeamService, private router : Router){}

  ngOnInit() {
    this.redirectToTeamEdit();
  }
  
  redirectToTeamEdit(){
    let id=localStorage.getItem("id");
    this.teamService.findById(+id).subscribe(
      data=>{
        this.team = data;
      })
  }

  updateId(team:Team){
    this.teamService.updateTeams(team)
    .subscribe(data=>{
      this.team=data;
      alert("Degisikler tamamlandı");
      this.router.navigate([`teams`]);
    })

  }

  
  
}
