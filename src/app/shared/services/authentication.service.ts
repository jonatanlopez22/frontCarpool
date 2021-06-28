import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  respuestaGuard: any

  authenticate<T>(username, password, rol): Observable<T> {
    console.log(username);
    console.log(password);
    console.log(rol);

    this.respuestaGuard = this.http.get('http://localhost:8080/login?username=' + username + '&password=' + password + '&rol=' + rol).pipe(map((response) => response as T));

    return this.http.get('http://localhost:8080/login?username=' + username + '&password=' + password + '&rol=' + rol).pipe(map((response) => response as T));

  }

  getToken() {
    return localStorage.getItem('token')
  }

}


