export type User ={
_id:string;
first_name:string;
second_name:string;
email:string;
password:string;
phone:number;
image:string;
role:string;
gender:string;
active:boolean;
createdAt:string;
updatedAt:string;
}

export type LoggedInUser ={
    _id:string;
    first_name?:string;
    second_name?:string;
    email?:string;
    role?:string;
    gender?:string;
    iat?:number;
    }

export type UserLogin ={
    email:string;
    password:string;
}