import { User, UserLogin } from "../../../components/types/User";
import axios from "axios";
import url from '../../../utils/url'

const token = '';

export class UserServices{
    async login(body:UserLogin){
        console.log('body ',body);
        let response  = await axios.post(`${url}/user/login`,body);
        return response.data;

    }
    async create(body:User){

    }
    async updatePassword(body:User){
  const response =  await axios.put(`${url}/user/updatePassword/${body._id}`,body.password,
    {
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    );
    return response.data;
}

async getUser(user_id:string){
    const response  = await axios.get(`${url}/user/getUser/${user_id}`);
    return response.data;
}
}