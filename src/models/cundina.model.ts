export class Cundina{
    public _id: string;
    public user: string;
    public title: string;
    public tipo: string;
    public time: string;
    public cantidad: string;
    public creation: string;
    public start: string;
    public end: string;
    public integrantes: string;
    public pago_individual: string;
    public status: string;

    constructor(
        _id: string,
        user: string,
        title: string,
        tipo: string,
        time: string,
        cantidad: string,
        creation: string,
        start: string,
        end: string,
        integrantes: string,
        pago_individual: string,
        status: string,
    ){
        this._id = _id;
        this.user = user;
        this.title = title;
        this.tipo = tipo;
        this.time = time;
        this.cantidad = cantidad;
        this.creation = creation;
        this.start = start;
        this.end = end;
        this.integrantes = integrantes;
        this.pago_individual = pago_individual;
        this.status = status;
    }
} 