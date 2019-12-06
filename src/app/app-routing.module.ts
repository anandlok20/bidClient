import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { TeamViewComponent } from './team-view/team-view.component';
import { AuctionComponent } from './auction/auction.component';
import { AdminComponent } from './admin/admin.component';
import { AddPlayerComponent } from './admin/add-player/add-player.component';
import { AddTeamComponent } from './admin/add-team/add-team.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'teamView', component: TeamViewComponent },
  { path: 'auction', component: AuctionComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'addPlayer', component:AddPlayerComponent},
  { path: 'addTeam', component:AddTeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
