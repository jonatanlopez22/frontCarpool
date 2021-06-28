
import { Routes } from '@angular/router';


import { UserComponent } from '../../user/user.component';
import { MapsComponent } from '../../maps/maps.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { LoginComponent } from '../../login/login.component';
import { CalculadoraComponent } from '../../calculadora/calculadora.component';
import { CarpoolComponent } from 'app/carpool/carpool.component';
import { ReservaComponent } from 'app/reserva/reserva.component';


export const AdminLayoutRoutes: Routes = [
   
    { path: 'carpool', component: CarpoolComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'upgrade', component: UpgradeComponent },
    { path: '', component: LoginComponent },
    { path: 'calculator', component: CalculadoraComponent },
    { path: 'user', component: UserComponent },
    { path: 'reserva', component: ReservaComponent },

];




