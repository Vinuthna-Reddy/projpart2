import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Seat} from "../models/seats.model";

@Injectable()
export class SeatService{
    
    seat:Seat;
    constructor(private getHttp:HttpClient)
    {
        this.seat=new Seat();
    }
    public GetBookedseats(seat:Seat)
    {
        return this.getHttp.post("http://localhost:65465/api/seats",seat);
    }
}