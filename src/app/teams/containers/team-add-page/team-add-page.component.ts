import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TeamService } from '@team-handling/teams/services/team.service';
import { Team } from 'src/app/teams/models/team';

@Component({
  selector: 'app-team-add-page',
  templateUrl: './team-add-page.component.html',
  styleUrls: ['./team-add-page.component.css'],
  providers: [TeamService,FormsModule]
})
export class TeamAddPageComponent implements OnInit {

  title = "Add Team"

  public teams: Team[];

  
  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  public addTeams(addForm : NgForm): void{
    this.teamService.addTeams(addForm.value).subscribe(
      (response: Team)=>{
        console.log(response);
        this.teamService.getTeams();
        alert("Basarılı bir sekilde eklendi")
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    )

  }

}
