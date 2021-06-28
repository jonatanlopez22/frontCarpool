import { User } from "./User";

export class ReservaNew {

    id: number;
    fechaReserva: string;
    prestador: { id: any; };
    tomador: { id: any; };

    constructor(fechaReserva: string, prestador: { id: any; }, tomador: { id: any; }) {

        this.fechaReserva = fechaReserva;
        this.prestador = prestador;
        this.tomador = tomador;
    }

}