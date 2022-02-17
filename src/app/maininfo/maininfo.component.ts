import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maininfo',
  templateUrl: './maininfo.component.html',
  styleUrls: ['./maininfo.component.css']
})
export class MaininfoComponent implements OnInit {

  blog: Array<{author: string, datetime: string, location: string}> = [
    {
      author: "Joe Doe",
      datetime: Date(),
      location: "Salzburg"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
