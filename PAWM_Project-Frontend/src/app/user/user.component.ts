import { Component, OnInit } from '@angular/core';
import { GenericUserService } from '../_services/generic-user.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  message: any;

  constructor(private userService: UserService, private genericUserService: GenericUserService) { }

  ngOnInit(): void {
  }


  hasReservations() : any {
    if(localStorage.getItem("hasReservations") === null){
      this.genericUserService.hasReservations();
    }
    if(localStorage.getItem("hasReservations")==="false"){
      return false;
    }
    else{
      return true;
    }
  }


}
