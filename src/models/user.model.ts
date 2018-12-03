export class User {
    public _id: string;
    public id_openpay: string;
    public name: string;
    public last_name: string;
    public email: string;
    public phone_number: string;
    public address: string;
    public password: string;
    public role: string; 
    public url_image: string
    constructor(_id:string,id:string, name:string, phone_number:string, address:string, email:string, password: string, rol:string, url_image: string){
        this._id = _id;
        this.id_openpay = id;
        this.name = name;
        this.email = email;
        this.phone_number = phone_number;
        this.password = password;
        this.address = address;
        this.role = rol; 
        this.url_image = url_image;
    }
}