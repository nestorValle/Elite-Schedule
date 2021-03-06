import { GamePage } from './../game/game';
import { EliteApi } from './../../providers/elite-api/elite-api';
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the TeamDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-team-detail",
  templateUrl: "team-detail.html"
})
export class TeamDetailPage {
  public team: any= {}
  public games: Array<any>;
  private tourneyData: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private EliteApi: EliteApi
  ) { }

  ionViewDidLoad() {
    this.team = this.navParams.data;
    console.log('**nav params', this.navParams);
    
    this.tourneyData = this.EliteApi.getCurrentTourney();
    this.games = (this.tourneyData.games as Array<any>)
                 .filter(g=> g.team1Id === this.team.id || g.team2Id === this.team.id)
                 .map(g=> {
                   let isTeam1 = (g.team1Id === this.team.id);
                   let opponentName = isTeam1 ? g.team2 : g.team1;
                   let scoreDisplay = this.getScoreDisplay(isTeam1, g.team1Score, g.team2Score);
                   return {
                     gameId: g.Id,
                     opponent: opponentName,
                     time: Date.parse(g.time),
                     locationUrl: g.locationUrl,
                     scoreDisplay: scoreDisplay,
                     homeAway: (isTeam1 ? "vs." : "at")
                   };
                 });
  }

  getScoreDisplay(isTeam1, team1Score, team2Score){
    if(team1Score && team2Score) {
      var teamScore = (isTeam1 ? team1Score : team2Score);
      var opponentScore = (isTeam1 ? team2Score : team1Score);
      var winIndicator = teamScore > opponentScore ? "W:" : "L:";
      return winIndicator + teamScore + "-" + opponentScore;
    } else {
      return "";
    }
  }
  gameClicked($event, game) {
      let sourceGame = this.tourneyData.games.find(g => g.id === game.gameId);
      this.navCtrl.parent.parent.push()
  }
}
