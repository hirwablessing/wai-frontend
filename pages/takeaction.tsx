import Navbar from '../components/home/navbar'
import Footer from '../components/home/footer'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { LoadingOutlined } from '@ant-design/icons';
export default function takeAction(){

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
<div>
    {/* navigation bar */}
    <Navbar />
    {/* main body*/}
    <div className="p-5 lg:px-20 py-10">
        <div className="bg-yellow-50 p-10 font-bold text-3xl text-yellow-500 my-10">
            Take Action and Become An Amender
        </div>
        <div className="lg:flex gap-20">
            <div className="w-full lg:w-1/2">
                <h1 className="font-bold text-xl my-2 text-justify">
                    (Sharing Prayers) Millions of people across the globe are thirsting for you little.
                </h1>

                <p className="text-justify text-gray-500">
                    When the Bible tells us that the blessed are the one who considers the poor (Luke 1:37), it doesn’t
                    know the primary urge to give our wealth to the poor, but to throw the most dangerous prayers to the
                    causes of poverty. Through your personal, wholehearted, and global-oriented prayers, God can heal
                    the sick, provide justice to the oppressed, and feed the hungry across the globe. With God nothing [
                    is or ever] shall be impossible (Luke, 1:37).

                </p>
                {/* prayers */}
                <div className="block">
                    <h1 className="font-bold my-5">
                        We are currently praying for:
                    </h1>
                    <div className="ml-5">
                        <ul>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                        </ul>
                    </div>
                </div>

                {/* sample of prayer */}
                {/* prayers */}
                <div className="block">
                    <h1 className="font-bold my-5">
                        Samples of Prayer:
                    </h1>
                    <div className="ml-5">
                        <ul>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                        </ul>
                    </div>
                </div>

                {/* form */}
                <div className="block">

                    <form onSubmit={ handleSubmit((data)=> { handleForm(data) })}>
                        <div className="title  text-gray-500 text-xl my-5">
                            <div className="font-bold my-5 uppercase"> Share your little, but powerful prayer</div>
                            <div className="sub-title text-sm text-gray-400">Fill out the information</div>
                            <div className="sub-title text-sm text-gray-400">Field marked with <span
                                    className="text-red-500">*</span> is required</div>
                        </div>
                        <div className="lg:flex w-full gap-5">
                            <div className="form-group lg:w-1/2">
                                <label htmlFor="" className="text-gray-600 block my-3">Names <span
                                        className="text-red-500">*</span> </label>
                                <input type="text" id="" className="border p-3 w-full" {...register('names', {
                                    required: '* This field is required' })} />
                                <span className="text-red-600 text-xs">{errors.names && errors.names.message}</span>
                            </div>
                            <div className="form-group lg:w-1/2">
                                <label htmlFor="" className="text-gray-600 block my-3">Email <span
                                        className="text-red-500">*</span></label>
                                <input type="email" id="" className="border p-3 w-full" {...register('email', {
                                    required: '* This field is required' })} />
                                <span className="text-red-600 text-xs">{errors.email && errors.email.message}</span>
                            </div>
                        </div>
                        <div className="lg:flex w-full gap-5">
                            <div className="form-group lg:w-1/2">
                                <label htmlFor="" className="text-gray-600 block my-3">Phone number <span
                                        className="text-red-500"></span> </label>
                                <input type="text" id="" className="border p-3 w-full" {...register('names', {
                                    required: '* This field is required' })} />
                                <span className="text-red-600 text-xs">{errors.names && errors.names.message}</span>
                            </div>
                            <div className="form-group lg:w-1/2">
                                <label htmlFor="" className="text-gray-600 block my-3">Nation <span
                                        className="text-red-500">*</span></label>
                                <input type="email" id="" className="border p-3 w-full" {...register('email', {
                                    required: '* This field is required' })} />
                                <span className="text-red-600 text-xs">{errors.email && errors.email.message}</span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="text-gray-600 block my-3">Message <span
                                    className="text-red-500">*</span></label>
                            <textarea id="" className="border h-2/3 p-3 w-full" {...register('smessage', {
                                required: '* This field is required' })}></textarea>
                            <span className="text-red-600 text-xs">{errors.smessage && errors.smessage.message}</span>
                        </div>
                        <div>
                            {loading?
                            <button type="submit"
                                className="btn bg-yellow-400 px-4 py-3 text-white float-right my-5 focus:outline-none flex gap-2 items-center">
                                <LoadingOutlined />Submitting</button>:
                            <button type="submit"
                                className="btn bg-yellow-500 px-4 py-3 text-white float-right my-5 focus:outline-none">Submit</button>
                            }

                        </div>
                    </form>
                </div>

            </div>
            <div className="w-full lg:w-1/2 mt-20 lg:mt-0">
                <h1 className="font-bold text-xl my-2 text-justify">
                    (Sharing advice) As long as your advice brings a change, we can change our whole working system
                    because of the advice.
                </h1>
                <p className="text-justify text-gray-500">
                    We are a young humanitarian organization, so we are extremely thirsting for your incredible advice
                    more than anything. Given our working system and our vision, how do you think we can work and what
                    do you think can we add or remove?
                </p>

                {/* prayers */}
                <div className="block">
                    <h1 className="font-bold my-5">
                        Samples of Prayer:
                    </h1>
                    <div className="ml-5">
                        <ul>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                        </ul>
                    </div>
                </div>

                {/* form */}
                <div className="block">

                    <form onSubmit={ handleSubmit((data)=> { handleForm(data) })}>
                        <div className="title  text-gray-500 text-xl my-5">
                            <div className="font-bold my-5 uppercase"> Share you advice</div>
                            <div className="sub-title text-sm text-gray-400">Fill out the information</div>
                            <div className="sub-title text-sm text-gray-400">Field marked with <span
                                    className="text-red-500">*</span> is required</div>
                        </div>
                        <div className="lg:flex w-full gap-5">
                            <div className="form-group lg:w-1/2">
                                <label htmlFor="" className="text-gray-600 block my-3">Names <span
                                        className="text-red-500">*</span> </label>
                                <input type="text" id="" className="border p-3 w-full" {...register('names', {
                                    required: '* This field is required' })} />
                                <span className="text-red-600 text-xs">{errors.names && errors.names.message}</span>
                            </div>
                            <div className="form-group lg:w-1/2">
                                <label htmlFor="" className="text-gray-600 block my-3">Email <span
                                        className="text-red-500">*</span></label>
                                <input type="email" id="" className="border p-3 w-full" {...register('email', {
                                    required: '* This field is required' })} />
                                <span className="text-red-600 text-xs">{errors.email && errors.email.message}</span>
                            </div>
                        </div>
                        <div className="lg:flex w-full gap-5">
                            <div className="form-group lg:w-1/2">
                                <label htmlFor="" className="text-gray-600 block my-3">Phone number <span
                                        className="text-red-500"></span> </label>
                                <input type="text" id="" className="border p-3 w-full" {...register('names', {
                                    required: '* This field is required' })} />
                                <span className="text-red-600 text-xs">{errors.names && errors.names.message}</span>
                            </div>
                            <div className="form-group lg:w-1/2">
                                <label htmlFor="" className="text-gray-600 block my-3">Nation <span
                                        className="text-red-500">*</span></label>
                                <input type="email" id="" className="border p-3 w-full" {...register('email', {
                                    required: '* This field is required' })} />
                                <span className="text-red-600 text-xs">{errors.email && errors.email.message}</span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="text-gray-600 block my-3">Message <span
                                    className="text-red-500">*</span></label>
                            <textarea id="" className="border h-2/3 p-3 w-full" {...register('smessage', {
                                required: '* This field is required' })}></textarea>
                            <span className="text-red-600 text-xs">{errors.smessage && errors.smessage.message}</span>
                        </div>
                        <div>
                            {loading?
                            <button type="submit"
                                className="btn bg-yellow-400 px-4 py-3 text-white float-right my-5 focus:outline-none flex gap-2 items-center">
                                <LoadingOutlined />Submitting</button>:
                            <button type="submit"
                                className="btn bg-yellow-500 px-4 py-3 text-white float-right my-5 focus:outline-none">Submit</button>
                            }

                        </div>
                    </form>
                </div>
            </div>

        </div>

        {/* */}
        <div className="bg-yellow-50 p-10 font-bold text-3xl text-yellow-500 mt-20 lg:my-10 mb-5">
            Actions matter most when it comes to helping the poor.
        </div>
        <div className="lg:flex gap-20">
            <div className="w-full lg:w-1/2">
                <p className="text-justify text-gray-500">
                Becoming an ambassador of Amenders means committing to expand your god-given, humanitarian love to the next people around you. And, under God who strengthens you, we are convinced that you can solve the so-called insoluble problems --  sickness, oppression, poverty, abuse, injustice, and others -- of your friend, your family, your community, or your nation.  We are also committed to help you do that. 

                </p>
                <img src="/register.png" alt="" className="rounded-md" />
            </div>
            <div className="w-full lg:w-1/2">
                
            <form onSubmit={ handleSubmit((data)=> { handleForm(data) })}>
                        <div className="title  text-xl my-5">
                            <div className="font-bold my-5 uppercase text-dark-500">Register to become an Ambassador </div>
                            <div className="sub-title text-sm text-gray-400">Fill out the information</div>
                            <div className="sub-title text-sm text-gray-400">Field marked with <span
                                    className="text-red-500">*</span> is required</div>
                        </div>
                        <div className="lg:flex w-full gap-5">
                            <div className="form-group lg:w-1/2">
                                <label htmlFor="" className="text-gray-600 block my-3">Names <span
                                        className="text-red-500">*</span> </label>
                                <input type="text" id="" className="border p-3 w-full" {...register('names', {
                                    required: '* This field is required' })} />
                                <span className="text-red-600 text-xs">{errors.names && errors.names.message}</span>
                            </div>
                            <div className="form-group lg:w-1/2">
                                <label htmlFor="" className="text-gray-600 block my-3">Email <span
                                        className="text-red-500">*</span></label>
                                <input type="email" id="" className="border p-3 w-full" {...register('email', {
                                    required: '* This field is required' })} />
                                <span className="text-red-600 text-xs">{errors.email && errors.email.message}</span>
                            </div>
                        </div>
                        <div className="lg:flex w-full gap-5">
                            <div className="form-group lg:w-1/2">
                                <label htmlFor="" className="text-gray-600 block my-3">Phone number <span
                                        className="text-red-500"></span> </label>
                                <input type="text" id="" className="border p-3 w-full" {...register('names', {
                                    required: '* This field is required' })} />
                                <span className="text-red-600 text-xs">{errors.names && errors.names.message}</span>
                            </div>
                            <div className="form-group lg:w-1/2">
                                <label htmlFor="" className="text-gray-600 block my-3">Nationality <span
                                        className="text-red-500">*</span></label>
                                <input type="email" id="" className="border p-3 w-full" {...register('email', {
                                    required: '* This field is required' })} />
                                <span className="text-red-600 text-xs">{errors.email && errors.email.message}</span>
                            </div>
                            <div className="form-group lg:w-1/2">
                                <label htmlFor="" className="text-gray-600 block my-3">Job position <span className="text-xs">optional</span></label>
                                <input type="email" id="" className="border p-3 w-full" {...register('email')} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="text-gray-600 block my-3">What motivated you become an ambassador of Amenders? <span
                                    className="text-red-500">*</span></label>
                            <textarea id="" className="border h-2/3 p-3 w-full" {...register('smessage', {
                                required: '* This field is required' })}></textarea>
                            <span className="text-red-600 text-xs">{errors.smessage && errors.smessage.message}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="text-gray-600 block my-3">What community problems will you start to solve after this registration? <span
                                    className="text-red-500">*</span></label>
                            <textarea id="" className="border h-2/3 p-3 w-full" {...register('smessage', {
                                required: '* This field is required' })}></textarea>
                            <span className="text-red-600 text-xs">{errors.smessage && errors.smessage.message}</span>
                        </div>
                        <div>
                            {loading?
                            <button type="submit"
                                className="btn bg-yellow-400 px-4 py-3 text-white float-right my-5 focus:outline-none flex gap-2 items-center">
                                <LoadingOutlined />Submitting</button>:
                            <button type="submit"
                                className="btn bg-yellow-500 px-4 py-3 text-white float-right my-5 focus:outline-none">Register</button>
                            }

                        </div>
                    </form>
            </div>
        </div>

    </div>

    {/* main body ends here */}
    {/* footer */}
    <hr className="hidden lg:block" />
    <Footer />

</div>
)
}