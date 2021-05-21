import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamAddPageComponent } from './teams/containers/team-add-page/team-add-page.component';
import { TeamListPageComponent } from './teams/containers/team-list-page/team-list-page.component';
import { TeamService } from './teams/services/team.service';
import { TeamEditPageComponent } from './teams/containers/team-edit-page/team-edit-page.component';
import { TeamDetailPageComponent } from './teams/containers/team-detail-page/team-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamListPageComponent,
    TeamAddPageComponent,
    TeamEditPageComponent,
    TeamDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
