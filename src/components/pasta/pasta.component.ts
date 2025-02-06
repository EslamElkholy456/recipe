import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-pasta',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './pasta.component.html',
  styleUrl: './pasta.component.scss'
})
export class PastaComponent {
constructor(private httpClient:HttpClient){}

products:any

getMeals(){
  this.httpClient.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta').subscribe({
    next:(res:any)=>{
      console.log(res);
     this.products=res.meals
     console.log(res.meals);


    },
    error:(err: any)=>{
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
