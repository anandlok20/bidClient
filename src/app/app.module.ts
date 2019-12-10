import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuctionComponent } from './auction/auction.component';
import { TeamViewComponent } from './team-view/team-view.component';
import { AdminComponent } from './admin/admin.component';
import { AddPlayerComponent } from './admin/add-player/add-player.component';
import { AddTeamComponent } from './admin/add-team/add-team.component';
import { PlayerService } from './services/player.service';
import { TeamService } from './services/team.service';
import { FormsModule } from '@angular/forms';
import { AuctionViewComponent } from './auction-view/auction-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AuctionComponent,
    TeamViewComponent,
    AdminComponent,
    AddPlayerComponent,
    AddTeamComponent,
    AuctionViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [PlayerService, TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
