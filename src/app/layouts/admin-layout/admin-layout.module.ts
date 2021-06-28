import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule } from '@ngui/map';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { UserComponent } from '../../user/user.component';
import { MapsComponent } from '../../maps/maps.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { CalculadoraComponent } from '../../calculadora/calculadora.component';
import { FilterPipe } from 'app/shared/pipes/filter.pipe';
import { CarpoolComponent } from 'app/carpool/carpool.component';
import { ReservaComponent } from '../../reserva/reserva.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyApF3pPYLpb-U_QARmy0Vh-B4tULSJM4TI&callback=initMap&libraries=places&v=weekly' })
  ],
  declarations: [
    UserComponent,
    CarpoolComponent,
    MapsComponent,
    CalculadoraComponent,
    UpgradeComponent,
    FilterPipe,
    ReservaComponent
  ]
})

export class AdminLayoutModule { }




