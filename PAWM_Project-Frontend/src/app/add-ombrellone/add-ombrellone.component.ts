import { Component, OnInit } from '@angular/core';
import { AdminUserService } from '../_services/admin-user.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-add-ombrellone',
  templateUrl: './add-ombrellone.component.html',
  styleUrls: ['./add-ombrellone.component.css']
})
export class AddOmbrelloneComponent implements OnInit {
  listaOmbrelloni: any[] = [];

  constructor(private userService:UserService,private adminService:AdminUserService) { }

  ngOnInit(): void {
    this.createGrid();
    console.log(this.listaOmbrelloni);
  }

  /* addOmbrellone(id:number){
    this.adminService.addOmbrellone(this.listaOmbrelloni[id].id);
  } */

  public createGrid() {
    console.log(this.listaOmbrelloni.length);
    if (this.listaOmbrelloni.length == 0) {
      this.userService.getViewBeach().subscribe(
        (response: any) => {
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
    return this.listaOmbrelloni;
  }

  getColor(i: number){
    if(this.listaOmbrelloni[i].tipologia === null){
      return "warn";
    }
    return "primary";
  }

  getDisabled(i: number){
    if(this.listaOmbrelloni[i].tipologia === null){
      return false;
    }
    return true;
  }



}
