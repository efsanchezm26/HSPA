import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from 'src/services/housing.service';
import { IProperty } from '../property-list/IProperty';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  propertieshttp: Array<IProperty>=[];
  SellRent=1

  constructor(private route:ActivatedRoute, private router:Router,private housinService: HousingService) { }

  ngOnInit() {

    if(this.route.snapshot.url.toString())
    {
      this.SellRent=2;
    }

    this.housinService.getAllProperties(this.SellRent).subscribe(
      data => {
              console.log(data);
              this.propertieshttp = data;
              debugger;
              console.log(this.route.snapshot.url.toString())
           },error =>{
            console.log('httperror');
            console.log(error);
          }
    );
  }

  onBack(){
    this.router.navigate(['/']);
  }

}
