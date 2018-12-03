export class Card{
    public card_number: string;
    public holder_name: string;
    public expiration_year: string;
    public expiration_month: string;
    public cvv2: string;
    constructor(card_number:string, holder_name:string, expiration_year:string, expiration_month:string, cvv2:string){
        this.card_number = card_number;
        this.holder_name = holder_name;
        this.expiration_year = expiration_year;
        this.expiration_month = expiration_month;
        this.cvv2 = cvv2;
    }
}