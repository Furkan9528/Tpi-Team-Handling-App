import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamAddPageComponent } from './teams/containers/team-add-page/team-add-page.component';
import { TeamEditPageComponent } from './teams/containers/team-edit-page/team-edit-page.component';
import { TeamListPageComponent } from './teams/containers/team-list-page/team-list-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'teams', pathMatch: 'full'},
  { path: 'teams', component: TeamListPageComponent },
  { path: 'add', component: TeamAddPageComponent },
  { path: 'update/:{id}', component: TeamEditPageComponent },
  { path: 'teams/:{id}', component: TeamEditPageComponent }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
