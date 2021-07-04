import { Component, Injectable, Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { RequestOptions } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  getDynamicData: any;
  getAnalyzedData: any;
  previousRoute: any;
  constructor(private http: HttpClient) {
  }

  getCommonService() {
    var url = "../assets/json/sample.json";

    return this.http.get(url);
  }
  getHerosDetails() {
    var url = "../assets/json/heros.json";

    return this.http.get(url);
  }
  getAnalzedText(analyzedText) {
    let headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*')
    var url = "http://192.168.245.31:85/textanalytics/api/analytics/keyPhrases";
    return this.http.post(url, analyzedText);
  }

  setData(data) {
    this.setData = data;
  }

  getPreviousRoute() {
    return this.setData;
  }

}

