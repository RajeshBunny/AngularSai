import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-detection',
  templateUrl: './text-detection.component.html',
  styleUrls: ['./text-detection.component.css']
})
export class TextDetectionComponent implements OnInit {
  arrayList: any[];
  lati: any;
  longi: any;
  urlList: any[];
  constructor() {
    this.arrayList = [
      { 'id': 0, 'name': 'THALAPPAKATTI HOTELS P LTD PARRYS', 'lat': 13.0886984, 'long': 80.28798299999994, 'favourites': true },
      { 'id': 1, 'name': 'Mathura Restaurant', 'lat': 13.0667639, 'long': 80.26884539999992, 'favourites': true },
      { 'id': 2, 'name': 'Annalakshmi Restaurant', 'lat': 13.065713, 'long': 80.25966100000005, 'favourites': false },
      { 'id': 3, 'name': 'Sangeetha Veg Restaurant', 'lat': 13.0657877, 'long': 80.25637419999998, 'favourites': true },
      { 'id': 4, 'name': 'Kefi', 'lat': 13.0614482, 'long': 80.26360269999998, 'favourites': false },
      { 'id': 5, 'name': 'Chilis American Grill', 'lat': 13.058432, 'long': 80.26398829999994, 'favourites': false },
      { 'id': 6, 'name': 'Twisty Tails', 'lat': 13.0645072, 'long': 80.24801109999999, 'favourites': true }
    ];
  }

  ngOnInit() {
    this.getDetails();
  }

  getDetails() {

  }
  highlightCity() {
    let elem;
    let otherelem;
    this.arrayList.forEach((element, index) => {
      otherelem = document.getElementById('list' + index);
      otherelem.classList.remove('highlight');
      if (element.lat == this.lati && element.long == this.longi) {
        elem = document.getElementById('list' + index);
        elem.classList.add('highlight');
        elem.scrollIntoView();
      }
    });
  }

}
