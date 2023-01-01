import { AfterViewInit, Component, ElementRef, Injectable, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

interface SalesPerson {
  name: string,
  surname: string,
  id: number
}

interface Company {
  id: number,
  name: string
}

interface Contract {
  id: number,
  relatedCompany: Company
}

@Component({
  selector: 'app-brekuja',
  templateUrl: './brekuja.component.html',
  styleUrls: ['./brekuja.component.scss']
})
export class BrekujaComponent implements OnInit, AfterViewInit {
  @ViewChild('paragraphRef') myParagraphRef: ElementRef
  @ViewChildren('paragraphRef') manyParagraphRef!: QueryList<'paragraphRef'>

  constructor() {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.myParagraphRef.nativeElement.style.border = "2px solid navajowhite"
    let jokes: any[] = this.manyParagraphRef.toArray()
    jokes.forEach(j =>{
      console.log(j)
      // j.nativeElement.style.background = "maroon"
      // j.nativeElement.style.color = "navajowhite"
    })
  }


}
