import { Component, OnInit } from '@angular/core';
import {Seat} from '../models/seats.model';
import {SeatService} from '../services/seats.service';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

  seat:Seat;
  s:any;
  num:any;
  constructor(private seatservice:SeatService) 
  { 
    this.seat=new Seat();
    this.seat.Bus_ID=1;
    this.seat.seat_status="booked";
    this.num=Array(5).fill(4);
  }
  
  Bookedseats()
  {
    this.seatservice.GetBookedseats(this.seat).subscribe(
      u=>{this.s=u;console.log(this.s);}) 
      //this.arr=this.s;
  }
  ngOnInit(): void {
  }

}
