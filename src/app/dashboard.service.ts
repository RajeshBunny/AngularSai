import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getDetailsService() {
    console.log('i m in service file');
    return this.http.get('../assets/json/data.json');
  }

  getMoney() {

  }


}
