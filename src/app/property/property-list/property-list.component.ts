//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/services/housing.service';
import { IProperty } from './IProperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  propertieshttp: Array<IProperty>=[];

  properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Birla house",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 2,
      "Name": "Birla house",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 3,
      "Name": "Birla house",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 4,
      "Name": "Birla house",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 5,
      "Name": "Birla house",
      "Type": "House",
      "Price": 12000
    }

  ]

  //constructor(private http: HttpClient) { }

 // ngOnInit(): void {
 //   this.http.get('data/properties.json').subscribe(
 //     data => {
  //      console.log(data);
  //      this.propertieshttp = data;
   //   }
  //  )

 //     ;
 // }

  constructor(private housinService:HousingService) { }

  ngOnInit(): void {
    this.housinService.getAllProperties().subscribe(
      data => {
              console.log(data);
              this.propertieshttp = data;
           },error =>{
            console.log('httperror');
            console.log(error);
          }
    );

  }

}
