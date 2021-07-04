import { Component, OnInit, ViewChild } from "@angular/core";

import { Router } from "@angular/router";
import { DataServiceService } from "../data-service.service";
import { Form } from "../../../node_modules/@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class loginComponent implements OnInit {
  username: string;
  password: string;
  title = 'Angular 6 Project!';

  viswa = 134;

  @ViewChild('loginForm') loginForm: any;

  firstName: any;
  lastName: string;
  passwordOne: any;
  todaydate = new Date();
  jsonval = { name: 'Rox', age: '25', address: { a1: 'Mumbai', a2: 'Karnataka' } };
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

  registerMessage: any;



  constructor(private router: Router, public dataService: DataServiceService) { }

  ngOnInit() {
    console.log('default method trigered on load of component');
    this.registerMessage = "Hello"
    this.firstName = true;
    //One day // Two way data binding 90
    this.lastName = 'Vsw';
  }

  login() {
    console.log(this.username + "" + this.password);
    //this.dataService.setData(this.username);
    if (this.username && this.password) {
      this.router.navigate(["dashboard"]);
    }
  }
  // onModal() {
  //   this.user = this.username;
  //   this.pass = this.password;
  //   console.log(this.user + "" + this.pass);
  //   if (this.user == "bunny" && this.pass == "bujji") {
  //     this.router.navigate(["dashboard/summary"]);
  //   }
  // }
  registerNavigate() {
    this.dataService.setData(this.router.url);
    this.router.navigate(["register"]);
  }
  templateMethod() {
    console.log(this.loginForm.value)
  }
}
