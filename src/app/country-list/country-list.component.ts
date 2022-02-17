import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countryList;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCountry().subscribe((data)=>{
      console.log(data);
      this.countryList = data;
    });
  }

}
