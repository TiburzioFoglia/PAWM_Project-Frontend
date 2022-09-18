import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminUserService } from '../_services/admin-user.service';

@Component({
  selector: 'app-add-ombrellone-form',
  templateUrl: './add-ombrellone-form.component.html',
  styleUrls: ['./add-ombrellone-form.component.css'],
})
export class AddOmbrelloneFormComponent implements OnInit {
  tipologie: any[] = [];
  idPostoOmbrellone : number = -1;
  tipologiaScelta: any = "";

  constructor(private adminUserService: AdminUserService,private route: ActivatedRoute,private router: Router) {}

  ngOnInit(): void {
    this.getTipologie();
    this.route.params.subscribe(p => {
      console.log(p);
      this.idPostoOmbrellone = p['id'];
    })
  }

  getTipologie() {
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

  changeTipologia(value: any){
    console.log(value);
    this.tipologiaScelta = value;
  }

  addOmbrellone() {
    if(this.tipologiaScelta === ""){
      alert("Scegli la tipologia");
      return;
    }
    this.adminUserService.addOmbrellone(this.tipologiaScelta,this.idPostoOmbrellone);
    this.router.navigate(['/admin']);
    
  }
}
