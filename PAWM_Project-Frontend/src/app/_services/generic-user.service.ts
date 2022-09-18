import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class GenericUserService {

  PATH_OF_API = 'http://localhost:8181/api';
  

  constructor(private httpclient: HttpClient, private userAuthService: UserAuthService) { }

  public hasReservations() : void {
    this.httpclient.get(this.PATH_OF_API + '/hasReservations', {
      responseType: "json",
      params: new HttpParams().set("userName", this.userAuthService.getUserName())
    }).subscribe(
      (response: any) => {
        console.log(response);
        localStorage.setItem("hasReservations",response); 
      },
      (error) => {
        console.log(error);
      }
      );
  }

}
