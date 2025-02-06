import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { BeefComponent } from '../components/beef/beef.component';
import { BreakfastComponent } from '../components/breakfast/breakfast.component';
import { ChickenComponent } from '../components/chicken/chicken.component';
import { DessertComponent } from '../components/dessert/dessert.component';
import { GoatComponent } from '../components/goat/goat.component';
import { LambComponent } from '../components/lamb/lamb.component';
import { MiscellaneousComponent } from '../components/miscellaneous/miscellaneous.component';
import { PastaComponent } from '../components/pasta/pasta.component';
import { PorkComponent } from '../components/pork/pork.component';
import { SeafoodComponent } from '../components/seafood/seafood.component';
import { SideComponent } from '../components/side/side.component';
import { VeganComponent } from '../components/vegan/vegan.component';
import { VegetarianComponent } from '../components/vegetarian/vegetarian.component';

export const routes: Routes = [
  {path:'',component:HomeComponent,title:'Home'},
  {path:'home',component:HomeComponent,title:'Home'},
  {path:'beef',component:BeefComponent,title:'Beef'},
  {path:'breakfast',component:BreakfastComponent,title:'Breakfast'},
  {path:'chicken',component:ChickenComponent,title:'Chicken'},
  {path:'dessert',component:DessertComponent,title:'Dessert'},
  {path:'goat',component:GoatComponent,title:'Goat'},
  {path:'lamb',component:LambComponent,title:'Lamb'},
  {path:'miscellaneous',component:MiscellaneousComponent,title:'miscellaneous'},
  {path:'pasta',component:PastaComponent,title:'Pasta'},
  {path:'pork',component:PorkComponent,title:'pork'},
  {path:'seafood',component:SeafoodComponent,title:'Seafood'},
  {path:'side',component:SideComponent,title:'Side'},
  {path:'vegan',component:VeganComponent,title:'Vegan'},
  {path:'vegetarian',component:VegetarianComponent,title:'Vegetarian'},

];
