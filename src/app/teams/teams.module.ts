import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamListPageComponent } from './containers/team-list-page/team-list-page.component';
import { TeamAddPageComponent } from './containers/team-add-page/team-add-page.component';
import { TeamEditPageComponent } from './containers/team-edit-page/team-edit-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '@team-handling/app-routing.module';

@NgModule({
  declarations: [
    TeamListPageComponent,
    TeamAddPageComponent,
    TeamEditPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ]
})
export class TeamsModule { }
