import { Component, OnInit, ViewChild } from "@angular/core";

import { Router } from "@angular/router";
import { DataServiceService } from "../data-service.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class loginComponent implements OnInit {
  @ViewChild('loginForm') loginForm: any;
  passwordOne: any;
  todaydate = new Date();
  registerMessage: any;
  userEmail:any;
  userPWD: any;



  constructor(private router: Router, public dataService: DataServiceService) { }

  ngOnInit() {
  }

  submit() {
    console.log(this.userEmail + "" + this.userPWD);
    //this.dataService.setData(this.userEmail);
    if (this.userEmail.includes('gmail') && this.userPWD) {
      this.router.navigate(["dashboard"]);
    }
  }
  // onModal() {
  //   this.user = this.userEmail;
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
