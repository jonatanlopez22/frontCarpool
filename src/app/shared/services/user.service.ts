import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reserva } from 'app/model/Reserva';
import { ReservaNew } from 'app/model/ReservaNew';
import { User } from 'app/model/User';
import { UserNew } from 'app/model/UserNew';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsuario() {

    return this.http.get<User[]>('http://localhost:8080/readr?rol=0');

  }


  saveReserva(reservaNew: ReservaNew): Observable<any> {

    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(reservaNew);

    return this.http.post('http://localhost:8080/createreserva', body, { 'headers': headers });

  }


  saveUser(userNew: UserNew): Observable<any> {

    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(userNew);

    return this.http.post('http://localhost:8080/create', body, { 'headers': headers });

  }


  getReserva(username) {

    return this.http.get<Reserva[]>('http://localhost:8080/leareserbaU?user=' + username);

  }

  
  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => {
          reject(err);
        });
    });
  }


  eliminarReserva(id:number): Observable<any>{
    return  this.http.delete<any>('http://localhost:8080/eliminar/'+id);
  }

 

}