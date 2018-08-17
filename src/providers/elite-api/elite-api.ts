import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { BaseApiService } from '../BaseApiservice';

/*
  Generated class for the EliteApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EliteApi extends BaseApiService {
  private baseUrl = 'https://elite-schedule-app-i4-c82e9.firebaseio.com/';
  private currentTourney: any = {};

  constructor(public http: HttpClient) {
    super('tournaments-data');
  }

  getTournaments(){
    return new Promise(resolve => {
      this.http.get(this.baseUrl + '/tournaments.json').subscribe(res => { 
        resolve(res);
      }, error => {
        console.log(error);
      });
    });
  }

  getTournamentData(tournamentId): Observable<any> {
    const url = this._apiTarget + '/' + tournamentId +'.json';
    return this.http.get(url)
    .map(response=>{
      this.currentTourney = response;
      return this.currentTourney;
    });
  }
  getCurrentTourney() {
    return this.currentTourney;
  }
}
