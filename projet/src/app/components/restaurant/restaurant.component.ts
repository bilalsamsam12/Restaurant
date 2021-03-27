import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { map } from "rxjs/operators";
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Restaurant } from 'src/app/models/Restaurant';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  resto: any;
  baseUrl = "../../../assets/images/";
  
  constructor(private route: ActivatedRoute, private restaurantService: RestaurantService) {
    this.resto = {
      'titre': '',
      'sous_titre':'',
      'image': '../../../assets/images/accueil.png',
      'livraison': '',
      'emporter': '',
      'address': '',
      'telephone': '',
      'description': ''
    } 
   }

  ngOnInit(): void {

  
    //recuperation de id sur l'url
    this.route.paramMap.pipe(
      map((param: ParamMap) => {
        // @ts-ignore
        return param.params.id;
      })
    ).subscribe(Id => {
      this.getOneRestaurant(Id);

    });

  }
  //get un Restaurant
  getOneRestaurant(id: number) {
    this.restaurantService.getOneRestaurant(id).subscribe(rest => {
      this.resto = rest as Restaurant;
      
    });
  }
  }


