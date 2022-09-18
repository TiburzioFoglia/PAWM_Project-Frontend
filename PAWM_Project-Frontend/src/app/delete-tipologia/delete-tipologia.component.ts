import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminUserService } from '../_services/admin-user.service';

@Component({
  selector: 'app-delete-tipologia',
  templateUrl: './delete-tipologia.component.html',
  styleUrls: ['./delete-tipologia.component.css']
})
export class DeleteTipologiaComponent implements OnInit {

  tipologie: any[] = [];
  tipologiaScelta: any = "";

  constructor(private adminUserService: AdminUserService,private router: Router) {}

  ngOnInit(): void {
    this.getTipologie();
    console.log(this.tipologie);
  }

  getTipologie() {
    this.adminUserService.getTipologieNonUtilizzate().subscribe(
      (response: any) => {
        console.log(response);
        response.forEach((t: any) => {
          this.tipologie.push(t);
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  changeTipologia(value: any){
    console.log(value);
    this.tipologiaScelta = value;
  }

  deleteTipologia() {
    if(this.tipologiaScelta === ""){
      alert("Non è stata scelta una tipologia");
      return;
    }
    this.adminUserService.deleteTipologia(this.tipologiaScelta.id);
     this.router.navigate(['/admin']);
    
  }

}
