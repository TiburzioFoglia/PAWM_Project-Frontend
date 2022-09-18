import { Component, OnInit } from '@angular/core';
import { GenericUserService } from '../_services/generic-user.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css'],
})
export class ReservationListComponent implements OnInit {
  prenotazioni: any[] = [];

  constructor(private userService: GenericUserService) {}

  ngOnInit(): void {
    this.getPrenotazioniUser();
  }

  getPrenotazioniUser() {
    this.userService.getPrenotazioniUtente().subscribe(
      (response: any) => {
        console.log(response);
        if (response.length !== 0) {
          response.forEach((o: any) => {
            let data = new Date(o.dataInMillis);
            let currentYear = data.getFullYear();
            let currentMonth = data.getMonth();
            let currentDay = data.getDate();
            o.dataInMillis = currentDay.toString()+"/"+ currentMonth.toString()+"/"+ currentYear.toString();
            
            this.prenotazioni.push(o);
          });
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
    console.log(this.prenotazioni);
  }
}
