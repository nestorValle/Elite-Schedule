import { HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { environment } from "./environment";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";

/**
 * Class representing a service base with common properties and methods
 *
 * @class
 * @summary service base with common properties and methods
 * @alias component:core-services-http/base-api
 */
export abstract class BaseApiService {
    /**
    * Type number to set or get LeadId
    * @protected
    * @typedef {Object} BaseApiService
    * @property {Headers} headers
    */
   protected headers = new Headers({ 'Content-Type': 'application/json' });
 
    /**
    * Type number to set or get LeadId
    * @protected
    * @typedef {Object} BaseApiService
    * @property {HttpHeaders} headers
    */
   protected httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
   };
 
     /**
    * Type string to set or get username
    * @protected
    * @typedef {Object} BaseApiService
    * @property {string} apiRoot
    */
   protected _apiRoot: string;
 
    /**
    * Type string to set or get username
    * @protected
    * @typedef {Object} BaseApiService
    * @property {string} apiTarget
    */
   protected _apiTarget: string;
 
    /**
    * Type string to set or get username
    * @protected
    * @typedef {Object} BaseApiService
    * @property {string} apiTargetPlural
    */
   protected _apiTargetPlural: string;
 
  /**
    * @constructor BaseApiService
    * @param {string} target
    * */
   constructor(target: string) {
     this._apiRoot = environment.api;
     this._apiTarget = this._apiRoot + target;
     this._apiTargetPlural = this._apiTarget + 's';
     console.log(environment);
   }
 
   /**
    * Handle the error that it could be appear in httpResponse
    * @method handleError
    * @protected
    */
   protected handleError(error: HttpErrorResponse) {
     if (error.error instanceof ErrorEvent) {
       // A client-side or network error occurred. Handle it accordingly.
       console.error('An error occurred:', error.error.message);
     } else {
       // The backend returned an unsuccessful response code.
       // The response body may contain clues as to what went wrong,
       console.error(
         `Backend returned code ${error.status}, ` + `body was: ${error.error}`
       );
     }
     // return an ErrorObservable with a user-facing error message
     return new ErrorObservable(
       'Something bad happened; please try again later.'
     );
   }
 }