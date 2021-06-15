import {
    User,
    UserLogin
} from "../../../components/types/User";
import {
    PasswordChange, TeamMember
} from "../../../components/types/GeneralTypes";
import axios from "axios";
import url from '../../../utils/url'

let token:string;
if(typeof localStorage !=='undefined'){

 token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token") || "") : "";

}


export class UserServices {
    async login(body: UserLogin) {
        // console.log('body ', body);
        let response = await axios.post(`${url}/user/login`, body);
        return response.data;

    }
    async create(body: TeamMember) {
        let response = await axios.post(`${url}/user/createUser`, body, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }


    async getUser(user_id: string) {
        const response = await axios.get(`${url}/user/getUser/${user_id}`);
        return response.data;
    }

    async updatePassword(user_id: string, body: PasswordChange) {
        console.log('errr ', body )
        const response = await axios.put(`${url}/user/updatePassword/${user_id}`, body, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }

    
}