export class User{
    fname:string;
    lname:string;
    username:string;
    password:string;
    phone_no:number;
    email_id:string;
    constructor(fname:string="",lname:string="",username:string="",password:string="",phone_no:number=0,
    email_id:string="")
    {
        this.fname=fname;
        this.lname=lname;
        this.username=username;
        this.password=password;
        this.phone_no=phone_no;
        this.email_id=email_id;
    }
}