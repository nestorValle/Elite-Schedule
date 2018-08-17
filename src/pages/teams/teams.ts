import { EliteApi } from './../../providers/elite-api/elite-api';
import { TeamHomePage } from './../team-home/team-home';
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-teams",
  templateUrl: "teams.html"
})
export class TeamsPage {
  public teams = [ ];
  constructor(public navCtrl: NavController, public navParams: NavParams, private elitApi: EliteApi) {}

  ionViewDidLoad() {
    let selectTourney = this.navParams.data;
    this.elitApi.getTournamentData(selectTourney.id).subscribe(data => {
      console.log('get tournaments',data);
      this.teams = data.teams;
    });
  }

  itemTapped($event, team) {
    this.navCtrl.push(TeamHomePage, team);
  }
}