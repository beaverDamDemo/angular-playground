import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spisek',
  templateUrl: './spisek.component.html',
  styleUrls: ['./spisek.component.scss']
})
export class SpisekComponent implements OnInit {
  avti: any[] = []
  Object = Object;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.avti.push({
      'ime': "BMW serija 3: 318i",
      'Prva registracija': '2002 / 12',
      'Prevoženih': '280000 km',
      'Vrsta goriva': 'bencin',
      'Moč motorja': '88 kW  / 120 KM',
      'Menjalnik': 'ročni 5 pr.',
      'cena': 2500,
      'lokacija': 'Koper',
      'dodatno': 'LPG'
    }, {
      'ime': 'BMW serija 5: 520i limuzina',
      'Prva registracija': '      2004 / 12',
      'Prevoženih': '      300000 km',
      'Vrsta goriva': '      bencin',
      'Moč motorja': '      125 kW  / 170 KM',
      'Menjalnik': '      ročni 6 pr.',
      'cena': 3400,
      'lokacija': 'Ljubljana'
    })
  }

  onFindSpecs(): void {
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
