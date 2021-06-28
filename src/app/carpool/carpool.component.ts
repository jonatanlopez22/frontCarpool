import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reserva } from 'app/model/Reserva';
import { User } from 'app/model/User';
import { CarpoolService } from 'app/shared/services/carpool.service';
import { CommunicationService } from 'app/shared/services/communication.service';

@Component({
  selector: 'app-carpool',
  templateUrl: './carpool.component.html',
  styleUrls: ['./carpool.component.css']
})
export class CarpoolComponent implements OnInit {

  @Input() nameCarpool: any;
  users: User[];
  reservas: Reserva[];

  constructor(private router: Router,private service: CarpoolService, private CommunicationService: CommunicationService) {
    
   }

  ngOnInit() {

    console.log(this.CommunicationService.username);
    this.service.getReserva(this.CommunicationService.username)
      .subscribe(data => {
        console.log(data);
        this.reservas = data;
      })

  }

  Delete(id){

    console.log(id)

    this.service.eliminarReserva(id).subscribe(
      data =>{
        console.log('delete reponse',data)
        this.router.navigate(['carpool']);
        this.ngOnInit();
      }
    )
  }

}



