import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IProperty } from 'src/app/property/property-list/IProperty';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  //getAllProperties(){
  //  return this.http.get('data/properties.json')
  //}

  getAllProperties(SellRent:number):Observable<IProperty[]>{
    return this.http.get('data/properties.json').pipe(
      map((data:any)=>{
        const propertiesArray:Array<IProperty>=[];
        for (const id in data)
        {if(data.hasOwnProperty(id) && data[id].SellRent==SellRent)
        {
propertiesArray.push(data[id]);
        }
      }
      return propertiesArray;
      })
    )
  }



}
