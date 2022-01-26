import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
public propertyId: number=0;

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    debugger;
   // this.propertyId =Number(this.route.snapshot.params['id']);
    this.propertyId =+this.route.snapshot.params['id'];
    console.log('Probando tomar el valor')
    console.log(this.propertyId)

    this.route.params.subscribe(
      (params)=>{
        this.propertyId= +params['id'];
      });
  }

  onSelectNext(){
    this.propertyId += 1;

    this.router.navigate(['property-detail',this.propertyId]) ;

    //this.router.navigate(['property-detail',this.propertyId],{relativeTo:this.route}) ;

  }

}
