import axios from 'axios'
import { Message } from '../../../components/types/GeneralTypes'
import url from '../../../utils/url'

let token:string;
if(typeof localStorage !=='undefined'){

 token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token") || "") : "";

}

export class Messages {
  async createMessage(body: Message) {
    let response = await axios.post(`${url}/messages/create`, body, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    return response.data
  }

  async deleteMessage(id: string) {
    let response = await axios.delete(`${url}/messages/delete/${id}`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    return response.data
  }
}
