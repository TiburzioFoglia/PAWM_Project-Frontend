import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminUserService } from '../_services/admin-user.service';
import { GenericUserService } from '../_services/generic-user.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css'],
})
export class CreateReservationComponent implements OnInit {
  toggleSceltaOmbrellone = false;
  dataPrenotazione: string = '';
  numeroLettiniPrenotazione: number = 2;
  listaOmbrelloni: any[] = [];
  listaOmbrelloniConPrenotazioneInData: any[] = [];
  minDate: Date;
  maxDate: Date;

  constructor(
    private userService: UserService,
    private adminService: AdminUserService,
    private genericUserService: GenericUserService,
    private router: Router
  ) {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();

    this.minDate = new Date(currentYear, currentMonth, currentDay + 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  ngOnInit(): void {}

  next(data: any, numeroLettini: any) {
    if (data === '' || numeroLettini === '') {
      alert('Inserisci tutti i valori');
      this.toggleSceltaOmbrellone = false;
      return;
    }
    this.dataPrenotazione = data;
    this.numeroLettiniPrenotazione = numeroLettini;
    this.createGrid();
    this.setListaOmbrelloniPrenotatiInData(this.dataPrenotazione);
    this.toggleSceltaOmbrellone = true;
  }

  setListaOmbrelloniPrenotatiInData(data: any) {
    this.adminService.getOmbrelloniPrenotatiInData(data).subscribe(
      (response: any) => {
        console.log(response);
        if (response.length !== 0) {
          response.forEach((o: any) => {
            this.listaOmbrelloniConPrenotazioneInData.push(o);
          });
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  prenotaOmbrellone(i: any) {
    let idOmbrellone = this.listaOmbrelloni[i].id;
    this.genericUserService.createPrenotazione(
      this.dataPrenotazione,
      this.numeroLettiniPrenotazione,
      idOmbrellone
    );
    this.router.navigate(['/user']);
  }

  public createGrid() {
    if (this.listaOmbrelloni.length == 0) {
      this.userService.getViewBeach().subscribe(
        (response: any) => {
          /* console.log(this.listaOmbrelloni); */
          for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 10; j++) {
              response.listaOmbrelloni.forEach(
                (o: { location: { yaxis: number; xaxis: number } }) => {
                  if (o.location.yaxis === i && o.location.xaxis === j) {
                    this.listaOmbrelloni.push(o);
                  }
                }
              );
            }
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  getContenuto(i: number) {
    if (this.listaOmbrelloni[i].tipologia === null) {
      return false;
    }
    return true;
  }

  getDisabled(i: number) {
    let bool: boolean = false;
    if (this.listaOmbrelloni[i].tipologia === null) {
      return true;
    }

    this.listaOmbrelloniConPrenotazioneInData.forEach((o) => {
      if (o.id === this.listaOmbrelloni[i].id) bool = true;
    });

    return bool;
  }

  getColor(i: number) {
    return 'primary';
  }

  isbeachImage(i: number) {
    if (this.listaOmbrelloni[i].tipologia === null) {
      return true
    } else
      return false
  }
}
