import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reserva } from 'app/model/Reserva';
import { UserNew } from 'app/model/UserNew';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarpoolService {

  constructor(private http: HttpClient) { }

  getReserva(username) {

    return this.http.get<Reserva[]>('http://localhost:8080/leareserba?user=' + username);

  }

  saveCarpool(userNew: UserNew): Observable<any> {

    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(userNew);

    return this.http.post('http://localhost:8080/create', body, { 'headers': headers });

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