import { Component, OnInit } from '@angular/core';
import { RestaurantModel } from '../restaurants/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  item: RestaurantModel;

  constructor(private activateRoute: ActivatedRoute) { 
    this.activateRoute.params.subscribe((params: RestaurantModel) =>{
      this.item = params;
    });
  }

  ngOnInit() {}

}
