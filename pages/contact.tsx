import Navbar from '../components/home/navbar'
import Footer from '../components/home/footer'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { LoadingOutlined } from '@ant-design/icons';

export default function Contact() {
    
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [loading,setLoading] = useState(false)
  const handleForm = async(data:any)=>{
      setTimeout(() => {
          setLoading(false)
      }, 3000);
      setLoading(true)
    console.log(data.names,data.email,data.smessage)
  }
return (

<div>
    {/* navigation bar */}
    <Navbar />

    {/* main body image */}
    <div className="lg:flex gap-12 mx-auto lg:w-2/3 p-5 my-3">
        {/* <div className="shadow-lg lg:w-1/2 p-5 h-1/2">
            <div className="title font-bold text-gray-500 text-xl">Contact us</div>
        </div> */}
        <div className="bg-white w-full">

            <form onSubmit={ handleSubmit((data) => { handleForm(data) })}>
                <div className="title  text-gray-500 text-xl my-5"> <div className="font-bold my-5 uppercase"> Contact us</div>
                    <div className="sub-title text-sm text-gray-400">Fill out the information</div>
                    <div className="sub-title text-sm text-gray-400">Field marked with <span className="text-red-500">*</span> is required</div>
                </div>
                <div className="lg:flex w-full gap-5">
                    <div className="form-group lg:w-1/2">
                        <label htmlFor="" className="text-gray-600 block my-3">Names <span className="text-red-500">*</span> </label>
                        <input type="text" id="" className="border p-3 w-full"  {...register('names', { required: '* This field is required' })}  />
                        <span className="text-red-600 text-xs">{errors.names && errors.names.message}</span>
                    </div>
                    <div className="form-group lg:w-1/2">
                        <label htmlFor="" className="text-gray-600 block my-3">Email <span className="text-red-500">*</span></label>
                        <input type="email" id="" className="border p-3 w-full" {...register('email', { required: '* This field is required' })} />
                        <span className="text-red-600 text-xs">{errors.email && errors.email.message}</span>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="" className="text-gray-600 block my-3">Message <span className="text-red-500">*</span></label>
                    <textarea id="" className="border h-2/3 p-3 w-full" {...register('smessage', { required: '* This field is required' })}></textarea>
                    <span className="text-red-600 text-xs">{errors.smessage && errors.smessage.message}</span>
                </div>
                <div>
                    {loading?
         <button type="submit" className="btn bg-blue-400 px-4 py-3 text-white float-right my-5 focus:outline-none flex gap-2 items-center"><LoadingOutlined />Submitting</button>:
         <button type="submit" className="btn bg-blue-700 px-4 py-3 text-white float-right my-5 focus:outline-none">Submit</button>
                }
                
                </div>
            </form>
        </div>
    </div>

    {/* main body ends here */}
    {/* footer */}
    <hr className="hidden lg:block" />
    <Footer />

</div>
)
}
