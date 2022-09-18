import { Component, OnInit } from '@angular/core';
import { GenericUserService } from '../_services/generic-user.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  hasReservations: boolean = false;

  constructor(
    private userService: UserService,
    private genericUserService: GenericUserService
  ) {}

  ngOnInit(): void {
    this.genericUserService.hasReservations();
    if (localStorage.getItem('hasReservations') === 'true') {
      this.hasReservations = true;
    } else {
      this.hasReservations = false;
    }
  }

}
