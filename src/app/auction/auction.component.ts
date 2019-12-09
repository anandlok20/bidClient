import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PlayerService } from "../services/player.service";
import { player } from "../services/player";
import { team } from '../services/team';
import { TeamService } from '../services/team.service';

@Component({
  selector: "app-auction",
  templateUrl: "./auction.component.html",
  styleUrls: ["./auction.component.css"]
})
export class AuctionComponent implements OnInit {
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
  team1 = 0; team2 = 0; team3 = 0; team4 = 0; team5 = 0; team6 = 0;

  constructor(private routes: Router, private playerServices: PlayerService, private teamServices: TeamService) { }

  ngOnInit() {
    this.playerServices.getAllPlayerForBid().subscribe((r) => {
      this.playerArr = r;
      // this.images=this.playerArr;
      console.log("init", this.playerArr);
    });
    this.teamServices.getAllTeam().subscribe((r) => {
      this.teamArr = r;
      console.log("init", this.teamArr);
    });
  }
}
