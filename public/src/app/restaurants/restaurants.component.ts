import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  restaurants: any;
  error: any;
  displayCreateForm: boolean;

  constructor(private _http: HttpService, private router: Router) { }

  ngOnInit() {
    this.getRestaurants();
  }
  createRestaurant() {
    this.displayCreateForm = true;
  }

  getRestaurants() {
    this._http.getRestaurants().subscribe(data=>{
      this.restaurants = data;
    })
  }
  // showRestaurant(id){
  //   this._http.showRestaurant(id).subscribe(data =>{
  //     this.restaurants = data;
  //   })
  // }
  // updateRestaurant(id) {
  //   this._http.showRestaurant(id).subscribe(data => {
  //     console.log('Got author');
  //     this.restaurantToUpdate = data['restaurant'];
  //   })
  // }
  delete(id){
    this._http.deleteRestaurant(id).subscribe(data=>{   
    })}
}
