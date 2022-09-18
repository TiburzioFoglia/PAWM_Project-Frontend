import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminUserService } from '../_services/admin-user.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-delete-ombrellone',
  templateUrl: './delete-ombrellone.component.html',
  styleUrls: ['./delete-ombrellone.component.css'],
})
export class DeleteOmbrelloneComponent implements OnInit {
  listaOmbrelloni: any[] = [];
  listaOmbrelloniConPrenotazioni: any[] = [];

  constructor(
    private userService: UserService,
    private adminService: AdminUserService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.createGrid();
    this.getOmbrelloniConPrenotazione();
    console.log(this.listaOmbrelloniConPrenotazioni);
  }

  public createGrid() {
    if (this.listaOmbrelloni.length == 0) {
      this.userService.getViewBeach().subscribe(
        (response: any) => {
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
    return this.listaOmbrelloni;
  }

  public getOmbrelloniConPrenotazione() {
    if (this.listaOmbrelloniConPrenotazioni.length == 0) {
      this.adminService.getOmbrelloniConPrenotazioni().subscribe(
        (response: any) => {
          console.log(response);
          if(response.length !== 0){
            response.listaOmbrelloni.forEach((o: any) => {
              this.listaOmbrelloniConPrenotazioni.push(o);
            });
          }
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
    return this.listaOmbrelloniConPrenotazioni;
  }

  getColor(i: number) {
    return 'primary';
  }

  getDisabled(i: number) {
    let bool : boolean = true;
    if (this.listaOmbrelloni[i].tipologia === null) {
      return false;
    }
    
    this.listaOmbrelloniConPrenotazioni.forEach((o) => {
      if(o.id === this.listaOmbrelloni[i].id) bool = false;
    });

    return bool;
  }

  deleteOmbrellone(i : number){
    console.log(this.listaOmbrelloni[i].id);
    this.adminService.deleteOmbrellone(this.listaOmbrelloni[i].id);
    this.router.navigate(['/admin']);
  }



}
