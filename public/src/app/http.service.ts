import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private _http: HttpClient ) { }
  getRestaurants(){
    return this._http.get('/restaurants');
  }
  postRestaurant(newRestaurant){
    return this._http.post('/restaurants/new', newRestaurant);
  }
  showRestaurant(id){
    return this._http.get('/restaurants/'+id+'/edit')
  }
  updateRestaurant(id, update){
    return this._http.put('/restaurants'+id, update)
  }
  showReviews(id){
    return this._http.get('/restaurants'+id)
  }
  postRating(rating, id){
    return this._http.post('/restaurants/'+id, rating)
  }
  deleteRestaurant(id){
    return this._http.delete('/restaurants'+id)
  }

}
