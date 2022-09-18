import { Component, Injectable, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-griglia',
  templateUrl: './griglia.component.html',
  styleUrls: ['./griglia.component.css'],
})

export class GrigliaComponent implements OnInit {
  listaOmbrelloni: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.createGrid();
  }

  public createGrid() {
    console.log(this.listaOmbrelloni.length);
    if (this.listaOmbrelloni.length == 0) {
      this.userService.getViewBeach().subscribe(
        (response: any) => {
          /* console.log(this.listaOmbrelloni); */
          for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 10; j++) {
              response.listaOmbrelloni.forEach(
                (o: { location: { yaxis: number; xaxis: number; }; }) => {
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
    console.log(this.listaOmbrelloni.length);
  }

  getContenuto(i:number){
    if(this.listaOmbrelloni[i].tipologia === null){
      return false;
    }
    return true;

  }


}
