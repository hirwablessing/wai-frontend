export type User ={
_id:string;
first_name:string;
last_name:string;
email:string;
password:string;
phone:number;
gender:string;
active:boolean;
createdAt:string;
updatedAt:string;
}

export type LoggedInUser ={
    id?:string;
    first_name?:string;
    second_name?:string;
    email?:string;
    gender?:string;
    iat?:number
    }

export type UserLogin ={
    email:string;
    password:string;
}