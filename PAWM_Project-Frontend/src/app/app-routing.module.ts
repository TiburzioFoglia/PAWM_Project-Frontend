import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOmbrelloneFormComponent } from './add-ombrellone-form/add-ombrellone-form.component';
import { AddOmbrelloneComponent } from './add-ombrellone/add-ombrellone.component';
import { AddTipologiaComponent } from './add-tipologia/add-tipologia.component';
import { AdminComponent } from './admin/admin.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { DeleteOmbrelloneComponent } from './delete-ombrellone/delete-ombrellone.component';
import { DeleteTipologiaComponent } from './delete-tipologia/delete-tipologia.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { GrigliaComponent } from './griglia/griglia.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'user', component: UserComponent, canActivate:[AuthGuard], data:{roles:['User']} },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'vistaGriglia', component: GrigliaComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'addOmbrellone', component: AddOmbrelloneComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'deleteOmbrellone', component: DeleteOmbrelloneComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'addTipologia', component: AddTipologiaComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'deleteTipologia', component: DeleteTipologiaComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'createReservation', component: CreateReservationComponent, canActivate:[AuthGuard], data:{roles:['User']} },
  { path: 'addOmbrellone/form/:id', component: AddOmbrelloneFormComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'checkReservations', component: ReservationListComponent, canActivate:[AuthGuard], data:{roles:['User']} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
