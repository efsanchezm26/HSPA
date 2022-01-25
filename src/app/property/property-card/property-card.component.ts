import { Component, Input } from "@angular/core";
import { IProperty } from "../property-list/IProperty";
// alt 96 `


@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  //template: `<h1>I am a card</h1>`,
  //styles: ['h1{font-weight: normal;}']
  styleUrls: ['property-card.component.css']
}
)


export class PropertyCardComponent {

  @Input() property_name: any;

 // Property: any = {
  //  "Id": 1,
  //  "Type": "House",
  //  "Price": 12000
 // }
}
