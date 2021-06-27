import { useForm } from 'react-hook-form'
import React, { useState } from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import Link from 'next/link';
import {useRouter} from 'next/router';
export default function forgotpassword(){
    const router = useRouter();


const { register, handleSubmit, formState: { errors } } = useForm()
const [loading,setLoading] = useState(false)
const handleForm = async(data:any)=>{
setTimeout(() => {
setLoading(false)
}, 3000);
setLoading(true)
console.log(data.names,data.email,data.smessage)
}
return(
<div className=" h-screen w-full">
    <div className="lg:flex lg:w-2/3 mx-auto my-auto">
        <div className="lg:w-1/2 bg-white h-screen flex items-center p-10">
            <div className="w-full">
            <div className="title text-blue-700 font-bold text-2xl cursor-pointer" onClick={()=>router.push('/')}> World Amenders International (WAI)
      </div>
            <h1 className="text-xl font-bold my-5 text-gray-600">Forgot password</h1>
            <span className="text-gray-300 text-sm my-5">Provide the email to recover your password</span>

            <form onSubmit={ handleSubmit((data)=> { handleForm(data) })}>
                
                <div className="w-full gap-5">

                    <div className="form-group">
                        <label htmlFor="" className="text-gray-600 block my-3">Email</label>
                        <input type="email" id="" className="border p-3 w-full" {...register('email', {
                            required: '* This field is required' })} />
                        <span className="text-red-600 text-xs">{errors.email && errors.email.message}</span>
                    </div>
                </div>
                <div>
                    {loading?
                    <button type="submit"
                        className="btn bg-blue-400 px-10 py-3 text-white my-5 text-sm focus:outline-none flex gap-2 items-center rounded">
                        <LoadingOutlined />Login</button>:
                    <button type="submit"
                        className="btn bg-blue-700 px-10 py-3 text-white my-5 focus:outline-none rounded text-sm">Reset</button>
                    }
            <div className="w-full flex my-5 text-sm">
                <Link href="/">
                <a className="w-1/2 text-blue-400 hover:underline">Visit site</a>
                </Link>
                <Link href="/login">
                <a className="w-1/2 flex justify-end text-gray-400 hover:underline">Login</a>
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