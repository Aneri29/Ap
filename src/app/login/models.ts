export interface userLog{
    email?:string;
    pass?:string
}

export interface userReg{
    fullName:name;
    email:string;
    pass:string;
    dob: Date;
    gender:string;
}

export interface name{
    fname:string;
    lname:string;
}