import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserNew } from 'app/model/UserNew';
import { Validators } from '@angular/forms';
import { CarpoolService } from 'app/shared/services/carpool.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-carpool',
  templateUrl: './create-carpool.component.html',
  styleUrls: ['./create-carpool.component.css']
})
export class CreateCarpoolComponent implements OnInit {

  username: any
  password: any
  phone: any
  rol: any
  cupos: any
  longit: any
  latit: any
  inicioR: any
  finR: any
  sentido: any
  tarifa:any
  direccion:any
  horaInicio:any
  horaFin:any


  constructor(private router: Router, private service: CarpoolService) { }

  ngOnInit() {
  }

  createCarpool() {

    let username = this.username;
    let password = this.password;
    let phone = this.phone;
    let rol = '0';
    let cupos = this.cupos;
    let longit = this.longit;
    let latit = this.latit
    let inicioR = this.inicioR;
    let finR = this.finR;
    let sentido = this.sentido;
    let horaInicio = this.horaInicio;
    let horaFin = this.horaFin;
    let tarifa = this.tarifa;
    let direccion = this.direccion;



    let userNew = new UserNew(username, password, phone, rol, cupos, longit, latit, inicioR, finR, sentido,tarifa,direccion,horaInicio,horaFin)


    this.service.saveCarpool(userNew).subscribe(data => {
      console.log(data);

      Swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
      });
      this.router.navigate(['']);

    }, error => Swal.fire({
      icon: 'error',
      title: 'Username are invalid!',
      text: 'The Username is already used'
    })

    );

  
  
  }


}
