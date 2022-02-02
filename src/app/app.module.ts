import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from 'src/services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import {Routes,RouterModule} from '@angular/router'
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import {UserLoginComponent} from './User/user-login/user-login.component';
import {UserRegisterComponent} from './User/user-register/user-register.component';

const appRoutes: Routes=[
  {    path:'',component:PropertyListComponent  },
  {    path:'add-property',component:AddPropertyComponent  },
  {    path:'rent-property',component:AddPropertyComponent  },
  {    path:'property-detail/:id',component:PropertyDetailComponent  },
  {    path:'user-login',component:UserLoginComponent  },
  {    path:'user-register',component:UserRegisterComponent  },
  {    path:'**',component:PropertyListComponent  },
]

@NgModule({
  declarations: [
    AppComponent,PropertyCardComponent, PropertyListComponent,
      NavBarComponent,AddPropertyComponent,PropertyDetailComponent
      ,UserLoginComponent,UserRegisterComponent
   ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,
    HttpClientModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [HousingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
