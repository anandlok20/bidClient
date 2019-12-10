import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../services/player.service';
import { TeamService } from '../services/team.service';
import { player } from '../services/player';
import { team } from '../services/team';

@Component({
  selector: 'app-auction-view',
  templateUrl: './auction-view.component.html',
  styleUrls: ['./auction-view.component.css']
})
export class AuctionViewComponent implements OnInit {

  playerArr = [{}];
  playerArrAll = [{}];
  play: player = {
    status: Boolean,
    name: "",
    gender: "",
    playerType: [],
    playerImages: "",
    baseValue: 0,
    sellPrice: 0
  };
  teamArr = [{}];
  teamsList: team = { name: "", owner: "", teamFund: "", players: [] };


  constructor(private routes: Router, private playerServices: PlayerService, private teamServices: TeamService) { }

  ngOnInit() {
    this.playerServices.getAllPlayerForBid().subscribe((r) => {
      this.playerArr = r;
      // this.images=this.playerArr;
      console.log("init", this.playerArr);
    });
    this.playerServices.getAllPlayer().subscribe((r) => {
      this.playerArrAll = r;
      // this.images=this.playerArr;
      console.log("init1", this.playerArrAll);
    });
    this.teamServices.getAllTeam().subscribe((r) => {
      this.teamArr = r;
      console.log("init2", this.teamArr);
    });
  }

}
