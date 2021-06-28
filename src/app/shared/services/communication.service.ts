import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  username: string;
  id: any;
  phone: any;
  rol: any;
  sentido: any;
  tarifa: any;
  inicioR: any;
  finR: any;
  private enviarMensajeSubject = new Subject<string>();
  enviarMensajeObservable = this.enviarMensajeSubject.asObservable();

  enviarMensaje(username: string) {
    this.username = username;
    this.enviarMensajeSubject.next(username);
  }


  dataUser(username, id, phone, rol,sentido,tarifa,inicioR,finR) {
    this.username = username;
    this.id = id;
    this.phone = phone;
    this.rol = rol;
    this.sentido = sentido;
    this.tarifa = tarifa;
    this.inicioR = inicioR;
    this.finR = finR;


  }

}



