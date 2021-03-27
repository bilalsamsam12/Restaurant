import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Restaurant } from 'src/app/models/Restaurant';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  RestaurantList: any;
  baseUrl = "../../../assets/images/";
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.getRestaurantsList();
  }

  //recuperer tous les restos
  getRestaurantsList() {

    this.restaurantService.getAllRestaurant().subscribe(rest => {
      this.RestaurantList = rest as Restaurant[];
    });

  }


}
