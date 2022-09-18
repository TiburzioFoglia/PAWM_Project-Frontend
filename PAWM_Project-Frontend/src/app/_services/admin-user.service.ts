import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminUserService {
  PATH_OF_API = 'http://localhost:8181/api';

  constructor(private httpclient: HttpClient) {}

  public addOmbrellone(tipologiaScelta: any, id: number) {
    this.httpclient
      .post(
        this.PATH_OF_API + '/administration/spiaggia/aggiungiOmbrellone',
        tipologiaScelta,
        {
          responseType: 'json',
          params: new HttpParams().set('idPosto', id),
        }
      )
      .subscribe(
        (response: any) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  addTipologia(nome: any, descrizione: any, moltiplicatore: any) {
    let body = {
      nome: nome,
      descrizione: descrizione,
      prezzo: moltiplicatore,
    };
    console.log(body);

    this.httpclient
      .post(
        this.PATH_OF_API +
          '/administration/listino/aggiungiTipologiaOmbrellone',
        body,
        {
          responseType: 'json',
        }
      )
      .subscribe(
        (response: any) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deleteTipologia(id: number) {
    this.httpclient
      .delete(
        this.PATH_OF_API + '/administration/listino/deleteTipologiaOmbrellone',
        {
          responseType: 'json',
          params: new HttpParams().set('id', id),
        }
      )
      .subscribe(
        (response: any) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  public getTipologieConPrezzo() {
    return this.httpclient.get(
      this.PATH_OF_API + '/listino/listaTipologieOmbrelloneConPrezzo',
      {
        responseType: 'json',
      }
    );
  }

  public getTipologieNonUtilizzate() {
    return this.httpclient.get(
      this.PATH_OF_API + '/spiaggia/listaTipologieOmbrelloneNonUtilizzate',
      {
        responseType: 'json',
      }
    );
  }

  public hasReservations(): void {
    this.httpclient
      .get(this.PATH_OF_API + '/hasReservations', {
        responseType: 'json',
      })
      .subscribe(
        (response: any) => {
          console.log(response);
          localStorage.setItem('hasReservations', response);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
