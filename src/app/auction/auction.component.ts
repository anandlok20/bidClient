import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PlayerService } from "../services/player.service";
import { player } from "../services/player";
import { team } from "../services/team";

@Component({
  selector: "app-auction",
  templateUrl: "./auction.component.html",
  styleUrls: ["./auction.component.css"]
})
export class AuctionComponent implements OnInit {
  playerArr = [{}];
  play: player = {
    status: "",
    name: "",
    gender: "",
    playerType: "",
    playerImages: "",
    baseValue: "",
    sellPrice: ""
  };
  teamArr = [{}];
  teamsList: team = { name: "", owner: "", teamFund: "", players: "" };

  constructor(private routes: Router, private playerServices: PlayerService) {}

  ngOnInit() {
    let context = this;
    this.playerServices.getAllEvents().subscribe(r => (context.playerArr = r));
  }
}
