import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { player } from 'src/app/services/player';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  play: player = {
    status: "",
    name: "",
    gender: "",
    playerType: "",
    playerImages: "",
    baseValue: "",
    sellPrice: ""
  };
  constructor(private playerService:PlayerService) { }

  ngOnInit() {
  }

}
