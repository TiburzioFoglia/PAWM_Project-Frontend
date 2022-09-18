import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminUserService } from '../_services/admin-user.service';

@Component({
  selector: 'app-add-tipologia',
  templateUrl: './add-tipologia.component.html',
  styleUrls: ['./add-tipologia.component.css']
})
export class AddTipologiaComponent implements OnInit {
  tipologie: any[] = [];

  constructor(private adminUserService: AdminUserService,private router: Router) { }

  ngOnInit(): void {
    this.getTipologieEsistenti();
  }

  getTipologieEsistenti(){
    this.adminUserService.getTipologieConPrezzo().subscribe(
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

  addTipologia(nome :any, descrizione : any, moltiplicatore : any){
    console.log(nome);
    console.log(descrizione);
    console.log(moltiplicatore);
    if(nome == "" || descrizione == "" || moltiplicatore == ""){
      console.log("valori non inseriti");
      alert("valori non inseriti");
      return;
    }
    if(this.controlloNomeTipologia(nome)){
      return;
    }
    this.adminUserService.addTipologia(nome,descrizione,moltiplicatore);
    this.router.navigate(['/admin']);

  }

  controlloNomeTipologia(nome : string){
    let bool : boolean = false;
    this.tipologie.forEach(t => {
      if(t.tipologiaOmbrellone.nome === nome){
        console.log("nome tipologia esistente");
        alert("nome tipologia esistente");
        bool =  true;
      }
    });
    return bool;
  }

}
