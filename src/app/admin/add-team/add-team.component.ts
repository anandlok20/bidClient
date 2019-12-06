import { Component, OnInit } from '@angular/core';
import { team } from 'src/app/services/team';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  selectedplayer="";
  teamsList: team = {name:"",owner:"",teamFund:"",players:""};
  constructor(private teamServices:TeamService) { }

  ngOnInit() {
  }

}
