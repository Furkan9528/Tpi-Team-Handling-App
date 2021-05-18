import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamListPageComponent } from './containers/team-list-page/team-list-page.component';
import { TeamAddPageComponent } from './containers/team-add-page/team-add-page.component';
import { TeamEditPageComponent } from './containers/team-edit-page/team-edit-page.component';

@NgModule({
  declarations: [
    TeamListPageComponent,
    TeamAddPageComponent,
    TeamEditPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TeamsModule { }
