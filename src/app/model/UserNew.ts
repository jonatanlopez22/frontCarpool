export class UserNew {

    id: number;
    username: string;
    password: string;
    phone: string;
    rol: string;
    cupos: number;
    longit: number;
    latit: number;
    inicioR: string;
    finR: string;
    sentido: string;
    tarifa: string;
    direccion: string;
    horaInicio:string;
    horaFin:string;

    constructor(username: string, password: string, phone: string, rol: string, cupos: number, longit: number, latit: number, inicioR: string, finR: string, sentido: string, tarifa: string,  direccion: string ,horaInicio:string,horaFin:string) {

        this.username = username;
        this.password = password;
        this.phone = phone;
        this.rol = rol;
        this.cupos = cupos;
        this.longit = longit;
        this.latit = latit;
        this.inicioR = inicioR;
        this.finR = finR;
        this.sentido = sentido;
        this.tarifa = tarifa;
        this.direccion = direccion;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;

    }

}