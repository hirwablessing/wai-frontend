import axios from "axios";
import { Article } from "../../../components/types/GeneralTypes";
import url from "../../../utils/url";

export class Posts{
    async  createPost(body:Article){
            let response  = await axios.post(`${url}/posts/createPost`,body);
            return response.data;

    }
}