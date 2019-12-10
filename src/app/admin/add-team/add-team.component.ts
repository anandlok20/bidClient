import { Component, OnInit } from '@angular/core';
import { team } from 'src/app/services/team';
import { TeamService } from 'src/app/services/team.service';
import { PlayerService } from 'src/app/services/player.service';
import { Router } from '@angular/router';
import { player } from 'src/app/services/player';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  teamArr = [{}];
  playerArr = [{}];
  selectedplayer = "";
  play: player = {
    status: Boolean,
    name: "",
    gender: "",
    playerType: [],
    playerImages: "",
    baseValue: 0,
    sellPrice: 0
  };
  teamsList: team = { name: "", owner: "", teamFund: "", players: [] };
  constructor(private teamServices: TeamService, private playerService: PlayerService, private routes: Router) { }

  ngOnInit() {
    this.playerService.getAllPlayer().subscribe((r) => {this.playerArr = r;
      console.log("init",this.playerArr);});
    
  }

  saveTeam() {
    this.teamsList.owner=this.selectedplayer;
    this.teamServices.saveTeam(this.teamsList).subscribe((r) => this.teamArr = r);
    console.log("after team saving");
    // this.play.status=true;
    // this.playerService.savePlayer(this.play).subscribe((r) => this.playerArr = r);
    // console.log("after player update");
  }

}
