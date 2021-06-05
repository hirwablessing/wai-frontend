import { User } from "../../types/User";
import axios from "axios";
import url from '../../../utils/url'

const token = JSON.parse(localStorage.getItem("token") || '');

export class UserServices{
    async login(body:User){
        let response  = await axios.post(`${url}/user/login`,body);
        return response.data;

    }
    async create(body:User){

    }
    async updatePassword(body:User){
  const response =  await axios.put(`${url}/user/updatePassword/${body.id}`,body.password,
    {
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    );
    return response.data;
}
}