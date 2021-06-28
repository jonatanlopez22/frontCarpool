import { User } from "./User";

export class Reserva {

    id: number;
    fechaReserva: string;
    prestador: User;
    tomador: User;


    constructor(reservar) {
        this.id = reservar.id;
        this.fechaReserva = reservar.fechaReserva;
        this.prestador = reservar.prestador;
        this.tomador = reservar.tomador;

    }



}