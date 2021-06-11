export type Article={
title: string,
content: string,
section:number,
user_id:string,
category_id:string,
}

export type TeamMember= {
first_name:string,
last_name:string,
phone:number,
email:string,
role:string
file:string
}

export type PasswordChange = {
    currentPassword:string | number,
    newPassword:string | number
}