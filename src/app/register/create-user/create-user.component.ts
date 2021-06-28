import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserNew } from 'app/model/UserNew';
import { UserService } from 'app/shared/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  username: any
  password: any
  phone: any
  rol: any
  cupos: any
  direccion: any
  longit: any
  latit: any
  inicioR: any
  finR: any
  sentido: any
  tarifa:any
  horaInicio:any
  horaFin:any

  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
  }

  createUser() {


    let username = this.username;
    let password = this.password;
    let phone = this.phone;
    let rol = '1';
    let cupos = this.cupos;
    let longit = this.longit;
    let latit = this.latit
    let inicioR = this.inicioR;
    let finR = this.finR;
    let sentido = this.sentido;
    let tarifa = this.tarifa;
    let direccion = this.direccion;
    let horaInicio = this.horaInicio;
    let horaFin = this.horaFin;

    let userNew = new UserNew(username, password, phone, rol, cupos, longit, latit, inicioR, finR, sentido,tarifa,direccion,horaInicio,horaFin)

    this.service.saveUser(userNew).subscribe(data => {
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
