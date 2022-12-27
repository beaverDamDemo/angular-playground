import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spisek',
  templateUrl: './spisek.component.html',
  styleUrls: ['./spisek.component.scss']
})
export class SpisekComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7cd950cfb4msh65047599c6a85edp1811a8jsn219f3cacfea2',
        'X-RapidAPI-Host': 'car-specs.p.rapidapi.com'
      }
    };

    fetch('https://car-specs.p.rapidapi.com/v2/cars/trims/77531', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));



  }

}
