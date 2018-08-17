import { TeamHomePage } from './../pages/team-home/team-home';
import { StandingPage } from './../pages/standing/standing';
import { GamePage } from './../pages/game/game';
import { TeamDetailPage } from './../pages/team-detail/team-detail';
import { TeamsPage } from './../pages/teams/teams';
import { TournamentsPage } from './../pages/tournaments/tournaments';
import { MyTeamsPage } from './../pages/my-teams/my-teams';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EliteApi } from '../providers/elite-api/elite-api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailPage,
    GamePage,
    StandingPage,
    TeamHomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailPage,
    GamePage,
    StandingPage,
    TeamHomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EliteApi
  ]
})
export class AppModule {}
