import { StandingPage } from "./../standing/standing";
import { TeamDetailPage } from "./../team-detail/team-detail";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-team-home",
  templateUrl: "team-home.html"
})
export class TeamHomePage {
  public teamdetalPageTap = TeamDetailPage;
  public standingTab = StandingPage;
  public team : any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad TeamHomePage");
  }
  goHome(){
    this.navCtrl.popToRoot();
  }
}
