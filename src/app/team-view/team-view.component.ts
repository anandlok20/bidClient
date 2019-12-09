import { Component, OnInit } from '@angular/core';
import { player } from '../services/player';
import { team } from '../services/team';
import { PlayerService } from '../services/player.service';
import { Router } from '@angular/router';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.css']
})
export class TeamViewComponent implements OnInit {

  playerArr = [{}];
  play: player = {
    status: Boolean,
    name: "",
    gender: "",
    playerType: [],
    playerImages: "",
    baseValue: 0,
    sellPrice: 0
  };
  images = "";
  teamArr = [{}];
  teamsList: team = { name: "", owner: "", teamFund: "", players: "" };
  constructor(private routes: Router, private playerServices: PlayerService, private teamServices: TeamService) { }

  ngOnInit() {
    this.playerServices.getAllPlayer().subscribe((r) => {
      this.playerArr = r;
      console.log("init", this.playerArr);
    });
    this.teamServices.getAllTeam().subscribe((r) => {
      this.teamArr = r;
      console.log("init", this.teamArr);
    });
  }

}
