import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles:[]){
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles() : [] {
    return JSON.parse(localStorage.getItem('roles')|| 'null' || '{}');
  }

  public setToken(jwtToken : string){
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken() : string {
    return localStorage.getItem('jwtToken')|| 'null' || '{}';
  }

  public clear(){
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken;
  }

}
