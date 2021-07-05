import { Component, OnInit, ViewChild } from "@angular/core";
import { DataServiceService } from "../data-service.service";
import { FormGroup, FormControl, Validators } from "../../../node_modules/@angular/forms";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry', 'lychee', 'kiwi', 'mango', 'peach', 'lime', 'pomegranate', 'pineapple'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: "app-text-sentiment",
  templateUrl: "./text-sentiment.component.html",
  styleUrls: ["./text-sentiment.component.css"]
})
export class TextSentimentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit',];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  tabledata: any;
  mydata: any;
  years: any;
  dname: any;
  name: any;
  position: any;
  dynamicdata: any;
  genders = ['male', 'female'];

  userDataa = {
    username: '',
    years: '',
    position: '',
  };
  submitted = false;
  formText = new FormGroup({
    firstName: new FormControl('Sai', Validators.required),
    lastName: new FormControl(123),
    password: new FormControl('', Validators.required)

  });

  constructor(private _service: DataServiceService) { 
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
    console.log(this.dataSource)
  }

  ngOnInit() { }
  table() {
    this.tabledata = true;
    this._service.getCommonService().subscribe(data => {
      this.mydata = data;
      console.log(this.mydata);
    });
  }
  hideTable() {
    this.tabledata = false;
    if (true) {

    } else { }

  }
  onSubmit() {

    console.log(this.userDataa)

    this.dynamicdata = {
      Name: this.userDataa.username,
      Years: this.userDataa.years,
      Position: this.userDataa.position
    }
    console.log(this.dynamicdata);
    this.mydata.push(this.dynamicdata);
    console.log(this.mydata);
  }

  onSubmitReactiveForm() {
    console.log(this.formText.value);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))]
  };



}
