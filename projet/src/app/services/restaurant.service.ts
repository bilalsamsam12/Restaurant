import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from 'src/app/models/Restaurant';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor(private http:HttpClient ) {}

  //get tous les Restaurants
  getAllRestaurant(): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>("http://localhost:3000/Restaurants");
  }

  //get un  Restaurants
  getOneRestaurant(id:number){
   return this.http.get(`http://localhost:3000/Restaurants/${id}`);
 }

}
