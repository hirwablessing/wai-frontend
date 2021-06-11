import { useForm } from 'react-hook-form'
import React, { useState,useContext } from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {UserServices} from './api/services/UserServices'
import {UserLogin} from '../components/types/User'
import {decode} from '../utils/decode'
import {UserContext} from './api/context/UserContext'
// use the user context


export default function login(){

    const {user,setUser} = useContext(UserContext)
    const router = useRouter();
    let [responseStatus, setResponseStatus] = useState<any>('')

const { register, handleSubmit, formState: { errors } } = useForm()
const [loading,setLoading] = useState(false)
const handleForm = async(data:any)=>{

setLoading(true)

let body:UserLogin = {
    email:data.email,
    password: data.password
}
try {
    const services = new UserServices();
    console.log(body);
    data = await services.login(body);
    let userData:any;
    userData = decode(data.token);
    console.log(userData);
    let userInfo = await services.getUser(userData.id);
    // console.log(userInfo);
    localStorage.setItem("user", JSON.stringify(userInfo.message));
    
    localStorage.setItem("token", JSON.stringify(data.token));
    // localStorage.setItem("token", JSON.stringify(data.token));
    setUser(userInfo.message);
    router.push("/panel/dashboard")
    
    setLoading(false)
} catch (e) {
    setResponseStatus(e.response.data.message);
    setLoading(false)
}


}
return(
<div className=" h-screen w-full">
    <div className="lg:flex lg:w-2/3 mx-auto my-auto">
        <div className="lg:w-1/2  bg-white h-screen flex items-center p-10">
            <div className="w-full">
            <div className="title text-blue-700 font-bold text-3xl cursor-pointer"  onClick={()=>router.push('/')}> World Amenders International (WAI)
      </div>
            <h1 className="text-3xl font-bold my-5 text-gray-600">Login</h1>
            <span className="text-gray-300 text-sm my-5">Login to use the WAI components</span>
            
        {responseStatus !=='' && <div className="bg-red-50 text-red-500 font-bold p-3 text-center text-sm">{responseStatus}</div>}
            <form onSubmit={ handleSubmit((data)=> { handleForm(data) })}>
                
                <div className="w-full gap-5">

                    <div className="form-group">
                        <label htmlFor="" className="text-gray-600 block my-3">Email</label>
                        <input type="email" id="" className="border p-3 w-full" {...register('email', {
                            required: '* This field is required' })} />
                        <span className="text-red-600 text-xs">{errors.email && errors.email.message}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="text-gray-600 block my-3">Password</label>
                        <input type="password" id="" className="border p-3 w-full" {...register('password', {
                            required: '* This field is required' })} />
                        <span className="text-red-600 text-xs">{errors.password && errors.password.message}</span>
                    </div>
                </div>
                <div>
                    {loading?
                    <button type="submit"
                        className="btn bg-blue-400 px-10 py-3 text-white my-5 focus:outline-none flex gap-2 items-center">
                        <LoadingOutlined />Login</button>:
                    <button type="submit"
                        className="btn bg-blue-700 px-10 py-3 text-white my-5 focus:outline-none">Login</button>
                    }
            <div className="w-full flex my-5">
                <Link href="/">
                <a className="w-1/2 text-blue-400 hover:underline">Visit site</a>
                </Link>
                <Link href="/forgotpassword">
                <a className="w-1/2 flex justify-end text-gray-400 hover:underline">Forgot password</a>
                </Link>
            </div>
            <div className="bottom-0 absolute py-10 text-gray-400 text-sm">
                    <h1> &copy; 2021 Allrights reserved ~ WAI</h1>
                </div>
                </div>
            </form>
            </div>
        </div>
        <div className="lg:w-1/2 bg-blue-700 flex items-center">
            <div className="mx-5 p-10 w-full">
                <h1 className="text-white text-3xl font-bold">World Amenders International (WAI)</h1>
        
            </div>
        </div>
    </div>
</div>
)

}