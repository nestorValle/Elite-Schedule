import { EliteApi } from './../../providers/elite-api/elite-api';
import { TeamsPage } from './../teams/teams';
import { TeamDetailPage } from './../team-detail/team-detail';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the TournamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {
  public tournaments: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi: EliteApi, private loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Getting tournaments...'
    });

    loader.present().then(()=>{
      this.eliteApi.getTournaments().then(data => this.tournaments = data);
      loader.dismiss();
    });
  }

  itemTapped($event, tournament){
    this.navCtrl.push(TeamsPage, tournament);
  }
}
