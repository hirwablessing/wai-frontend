import axios from "axios";
import { Article } from "../../../components/types/GeneralTypes";
import url from "../../../utils/url";

const token:string = JSON.parse(localStorage.getItem("token") || '');

export class Posts{


    async  createPost(body:Article){
        // console.log(body)
            let response  = await axios.post(`${url}/posts/createPost`,
            body,
            {
                headers:{
                        authorization:`Bearer ${token}`
                }
            }
            );
            return response.data;

    }
    async uploadImage(id:string,body: any,action:string){
        const response = await axios.put(`${url}/posts/upload-image/${id}?action=${action}`, body, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
        return response.data;
        
    }
}