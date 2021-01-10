import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {User} from "../models/user.model";

@Injectable()
export class UserService{
    constructor(private getHttp:HttpClient,private httpClient:HttpClient){
    }
    public LoginCheckUsingApi(user:User)
    {
        return this.httpClient.post("http://localhost:65465/api/Registered_User",user);
    }   
    public SignupUsingApi(user:User)
    {
        return this.getHttp.post("http://localhost:65465/api/Registered_User/post",user);
    }
}