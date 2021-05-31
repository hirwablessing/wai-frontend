import React, { useState } from "react";
import Navbar from "../../components/dashboard/navbar";
import Sidebar from "../../components/dashboard/sidebar";
import { useForm } from 'react-hook-form'
import { LoadingOutlined } from '@ant-design/icons';
import Link from "next/link";
// import PostEditor from "../../components/dashboard/PostEditor";
import dynamic from "next/dynamic"

const PostEditor = dynamic(()=> import("../../components/dashboard/editors/PostEditor"),{
    ssr:false
})

export default function create(){
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
                     <h1 className="font-bold">News / Create article</h1>
                     <div className="my-10">
                     <form onSubmit={ handleSubmit((data) => { handleForm(data) })}>
              
             
                <div className="form-group">
                        <label htmlFor="" className="text-gray-600 block my-3">Title </label>
                        <input type="text" id="" className="border p-3 w-full" {...register('title', { required: '* This field is required' })} />
                        <span className="text-red-600 text-xs">{errors.title && errors.title.message}</span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="" className="text-gray-600 block my-3">Tags </label>
                      <p className="mb-10">Create tags  or choose from created ones</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="" className="text-gray-600 block my-3">Content </label>
                        
                        {/* <PostEditor/> */}
                        <PostEditor/>
                        <span className="text-red-600 text-xs">{errors.content && errors.content.message}</span>
                    </div>
             
                <div>
                    {loading?
         <button type="submit" className="btn bg-blue-400 px-4 py-3 text-white float-right my-5 focus:outline-none flex gap-2 items-center"><LoadingOutlined />Publishing</button>:
         <button type="submit" className="btn bg-blue-700 px-4 py-3 text-white float-right my-5 focus:outline-none">Publish</button>
                }
                
                </div>
            </form>
          
                     </div>
               
                 </div>
             </div>
         </div>


     </div>
    )
}