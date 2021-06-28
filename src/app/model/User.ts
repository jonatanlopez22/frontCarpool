export class User {

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
    horaFin:string;
    horaInicio:string;


    constructor(login) {
        this.id = login.id;
        this.username = login.username;
        this.password = login.password;
        this.phone = login.phone;
        this.rol = login.rol;
        this.cupos = login.cupos;
        this.longit = login.longit;
        this.latit = login.latit;
        this.inicioR = login.inicioR;
        this.finR = login.finR;
        this.sentido = login.sentido;
        this.tarifa = login.tarifa;
        this.horaFin = login.horaFin;
        this.horaInicio = login.horaInicio;

    }





}