import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { player } from 'src/app/services/player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  playArr=[{}]
  play: player = {
    status: 0,
    name: "",
    gender: "",
    playerType: "",
    playerImages: "",
    baseValue: 0,
    sellPrice: 0
  };
  constructor(private playerService:PlayerService,private routes:Router) { }

  ngOnInit() {
  }

  saveData(){
    console.log("saving : ",this.play);
    this.playerService.savePlayer(this.play).subscribe((r) => this.playArr = r);
  }

}
