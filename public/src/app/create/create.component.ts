import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service'
import { Router, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createRestaurant: any;
  error: any;

  handleCancelClick(){
    this.router.navigate([''])
  }
  constructor(private _httpService: HttpService, private router: Router) {}

  ngOnInit() {
    this.error = [];
    this.createRestaurant = {name:"", cuisine:""} ;
  }
  create() {
    this._httpService.postRestaurant(this.createRestaurant).subscribe(data=>{
      if(data instanceof Array){
        console.log("errors")
        this.error = data;
      }
      else{
        this.createRestaurant = data;
        this.router.navigate(['/'])
      }
    })
  }
}
