import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { log } from 'console';
import { ServicesService } from '../../core/services/services.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers:[ServicesService]

})
export class HomeComponent {
constructor(private httpClient:HttpClient){}

products:any
// category:any
// getCategory(){
//   this.httpClient.get('https://www.themealdb.com/api/json/v1/1/categories.php').subscribe({
//     next:(res:any)=>{
//       console.log(res);
//      this.category=res.categories
//      console.log(res.categories);


//     },
//     error:(err)=>{
//       console.log(err);

//     },
//     // complete()=>{
//     //   console.log('complete');

//     // }
//   })
// }
getMeals(){
  this.httpClient.get('https://www.themealdb.com/api/json/v1/1/search.php?s').subscribe({
    next:(res:any)=>{
      console.log(res);
     this.products=res.meals
     console.log(res.meals);


    },
    error:(err)=>{
      console.log(err);

    },
    // complete()=>{
    //   console.log('complete');

    // }
  })
}
ngOnInit():void{

  this.getMeals()
  // this.getCategory()

}

}
