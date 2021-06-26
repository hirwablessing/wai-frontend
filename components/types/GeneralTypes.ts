export type Article={
title: string,
content: string,
section:number,
user_id:string,
category_id:string,
}

export type TeamMember= {
first_name:string,
second_name:string,
phone:number,
gender:string,
email:string,
role:string,
password:string
}

export type PasswordChange = {
    currentPassword:string | number,
    newPassword:string | number
}

export type Message = {
    names:string,
    email:string,
    cn_message:string
}