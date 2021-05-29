import React from "react";
import Navbar from "../../components/dashboard/navbar";
import Sidebar from "../../components/dashboard/sidebar";
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import Link from "next/link";

export default function changepassword(){
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
        <div className="block lg:flex gap-7 bg-gray-50">
        {/* sidebar */}
        <Sidebar/>
         <div className="lg:w-4/5 min-h-screen">
             <div className="">
                 {/* navbar */}
              <Navbar/>
                 {/* navbar ends here */}

                 {/* main body starts here */}
                 <div className="main--body p-10 my-5 bg-white">
                     <h1 className="font-bold">Settings / Change password</h1>
                     <div className="my-10 lg:w-2/3">
                     <form onSubmit={ handleSubmit((data) => { handleForm(data) })}>
              
                <div className="lg:flex w-full gap-5">
                    <div className="form-group lg:w-1/3">
                        <label htmlFor="" className="text-gray-600 block my-3">Old password  </label>
                        <input type="password" id="" className="border p-3 w-full"  {...register('old_password', { required: '* This field is required' })}  />
                        <span className="text-red-600 text-xs">{errors.old_password && errors.old_password.message}</span>
                    </div>
                    <div className="form-group lg:w-1/3">
                        <label htmlFor="" className="text-gray-600 block my-3">New password </label>
                        <input type="password" id="" className="border p-3 w-full" {...register('new_password', { required: '* This field is required' })} />
                        <span className="text-red-600 text-xs">{errors.new_password && errors.new_password.message}</span>
                    </div>
                    <div className="form-group lg:w-1/3">
                        <label htmlFor="" className="text-gray-600 block my-3">Confirm password </label>
                        <input type="password" id="" className="border p-3 w-full" {...register('confirm_password', { required: '* This field is required' })} />
                        <span className="text-red-600 text-xs">{errors.confirm_password && errors.confirm_password.message}</span>
                    </div>
                </div>

              
             
                <div>
                    {loading?
         <button type="submit" className="btn bg-yellow-400 px-4 py-3 text-white float-right my-5 focus:outline-none flex gap-2 items-center"><LoadingOutlined />Updating</button>:
         <button type="submit" className="btn bg-yellow-500 px-4 py-3 text-white float-right my-5 focus:outline-none">Update</button>
                }
                
                </div>
            </form>
         
                     </div>
                     <Link href="/settings/profilesettings">
            <a className="text-gray-400 text-sm my-5 hover:underline cursor-pointer">Change profile settings</a>
            </Link>
                 </div>
             </div>
         </div>


     </div>
    )
}