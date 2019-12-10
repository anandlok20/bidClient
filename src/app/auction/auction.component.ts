import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PlayerService } from "../services/player.service";
import { player } from "../services/player";
import { team } from "../services/team";
import { TeamService } from "../services/team.service";
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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
  teamsList: team = { name: "", owner: "", teamFund: "", players: [] };
  // t = (<HTMLInputElement>document.getElementById("t1")).value;

  team2;
  team3;
  team4;
  team5;
  team6;
  bidValue = 200000;

  price;
  avlBal;
  initBal;
  totalPlayers;
  remPlayers;
  initteamFund: any;

  constructor(
    private routes: Router,
    private playerServices: PlayerService,
    private teamServices: TeamService,
    // private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    let context = this;
    context.playerServices.getAllPlayerForBid().subscribe(r => {
      context.playerArr = r;
      // this.images=this.playerArr;
      console.log("init", context.playerArr);
    });
    context.teamServices.getAllTeam().subscribe(r => {
      context.teamArr = r;
      console.log("init", context.teamArr);
    });
    // this.defBaseValue();
  }

//   getImgContent(): SafeUrl {
//     this.images=(<HTMLInputElement>document.getElementById("t2")).value;
//     return this.sanitizer.bypassSecurityTrustUrl(this.images);
// }

  defBaseValue() {
    this.team1 = (<HTMLInputElement>document.getElementById("t1")).value;
    this.team2 = (<HTMLInputElement>document.getElementById("t1")).value;
    this.team3 = (<HTMLInputElement>document.getElementById("t1")).value;
    this.team4 = (<HTMLInputElement>document.getElementById("t1")).value;
    this.team5 = (<HTMLInputElement>document.getElementById("t1")).value;
    this.team6 = (<HTMLInputElement>document.getElementById("t1")).value;
  }

  teamBV;
  // =(<HTMLInputElement>document.getElementById("t1")).value;
  team1;
  tpCount = 0;
  teamdata(teamNo, but1, x1) {
    this.initteamFund = this.teamArr[teamNo].teamFund;
    this.totalPlayers = this.teamArr[teamNo].players.length;
    this.remPlayers = 10 - this.totalPlayers;
    if (this.team1 < 2000000) {
      this.avlBal = this.initteamFund - x1 + 200000;
      if (this.avlBal >= this.remPlayers * 1000000) {
        this.tpCount++;
        x1 = x1 + 200000;
        return Number.parseInt(x1);
      } else {
        (<HTMLInputElement>document.getElementById(but1)).disabled = true;
      }
    } else if (x1 > 2000000) {
      this.avlBal = this.initteamFund - this.team1 + 500000;
      if (this.avlBal >= this.remPlayers * 1000000) {
        this.tpCount++;
        x1 = x1 + 500000;
        return Number.parseInt(x1);
      } else {
        (<HTMLInputElement>document.getElementById(but1)).disabled = true;
      }
    }
    console.log(
      "initteamFund",
      this.initteamFund,
      "|totalPlayers",
      this.totalPlayers,
      "|remPlayers",
      this.remPlayers,
      "|team1",
      this.team1,
      "|teamBV",
      this.teamBV,
      "|tpCount",
      this.tpCount,
      "|avlBal",
      this.avlBal
    );
  }

  count1 = 0;
  team1data() {
    let newAvg;
    console.log("new",newAvg)
    if (this.count1 == 0) {
      this.teamBV = (<HTMLInputElement>document.getElementById("t1")).value;
      this.team1 = Number.parseInt(this.teamBV);
      this.teamdata(0, "bid1", this.team1);
    } else {
      this.teamdata(0, "bid1", this.team1);
    }
    console.log(this.count1);
  }
  count2 = 0;
  team2data() {
    if (this.count1 == 0) {
      this.teamBV = (<HTMLInputElement>document.getElementById("t1")).value;
      this.team1 = Number.parseInt(this.teamBV);
      this.teamdata(1, "bid2", this.team1);
    } else {
    this.teamdata(1, "bid2", this.team1);}
    console.log(this.count2);
  }
  count3 = 0;
  team3data() {
    if (this.count1 == 0) {
      this.teamBV = (<HTMLInputElement>document.getElementById("t1")).value;
      this.team1 = Number.parseInt(this.teamBV);
      this.teamdata(2, "bid3", this.team1);
    } else {
    this.teamdata(2, "bid3", this.team1);}
    console.log(this.count3);
  }
  count4 = 0;
  team4data() {
    if (this.count1 == 0) {
      this.teamBV = (<HTMLInputElement>document.getElementById("t1")).value;
      this.team1 = Number.parseInt(this.teamBV);
      this.teamdata(3, "bid4", this.team1);
    } else {
    this.teamdata(3, "bid4", this.team1);}
    console.log(this.count4);
  }
  count5 = 0;
  team5data() {
    if (this.count1 == 0) {
      this.teamBV = (<HTMLInputElement>document.getElementById("t1")).value;
      this.team1 = Number.parseInt(this.teamBV);
      this.teamdata(4, "bid5", this.team1);
    } else {
    this.teamdata(4, "bid5", this.team1);}
    console.log(this.count5);
  }
  count6 = 0;
  team6data() {
    if (this.count1 == 0) {
      this.teamBV = (<HTMLInputElement>document.getElementById("t1")).value;
      this.team1 = Number.parseInt(this.teamBV);
      this.teamdata(5, "bid6", this.team1);
    } else {
    this.teamdata(5, "bid6", this.team1);}
    console.log(this.count6);
  }
  selldata() {}
}
