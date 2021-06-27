import React, { useState } from "react";
import Dashboard from "../../../layouts/Dashboard";
import { LoadingOutlined, CameraOutlined } from "@ant-design/icons";
import { useForm } from 'react-hook-form'
import { TeamMember } from "../../../components/types/GeneralTypes";
import {UserServices} from '../../api/services/UserServices'
import Alert from "../../../components/dashboard/toasts/Alert";

export default function register() {

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(-1) // checking if there's no error while updating

    // error log
    const [errorLog, setErrorLog] = useState('')

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    // upload image here

    const [file, setFile] = useState("");
    const [img, setImage] = useState("");
    let tempFile: any;
    const uploadImage = (e: any) => {
        tempFile = e.target.files[0];
        // console.log("img",tempFile)
        const reader: any = new FileReader();
        reader.addEventListener(
            "load",
            function () {
                setFile(reader.result);
                setImage(tempFile);
            },
            false
        );

        if (tempFile) {
            reader.readAsDataURL(tempFile);
        }
        // setFilename(e.target.files.name);
    };


    const services = new UserServices();
    const handleForm = async (data: TeamMember) => {
        setLoading(true)
        const body:TeamMember = {
            first_name: data.first_name,
            second_name: data.second_name,
            role: data.role,
            phone: 0,
            gender: data.gender,
            email: data.email,
            password: '!@#Wai2020'

        }

        try{
            const response = await services.create(body)
            let formData = new FormData();
            formData.append("file",img)
            if(img){
                await services.uploadImage(response.message._id,formData,"user_img");
            }
            console.log(response.message._id)
            setLoading(false)
            setErrorLog("")
            setStatus(1)
            reset(response)
            setFile("")
        }catch(e){
            setErrorLog(e);
            setLoading(false)
        }

    
        // console.log('Member',
        //     body
        // )
    }



    return (
        <Dashboard>
            <div className="main--body p-10 mt-5 bg-white min-h-full">

                <h1 className="font-bold">Team / Register member</h1>
                <form action="" className="lg:w-2/3 py-5" onSubmit={handleSubmit((data: TeamMember) => { handleForm(data) })}>



                    <div className="lg:flex gap-5">
                        <div className="form-group lg:w-1/3">
                            <label htmlFor="" className="block my-3">Firstname</label>
                            <input type="text" id="" className="border p-3 w-full" {...register('first_name', {
                                required: '* This field is required'
                            })} />
                            <span className="text-red-600 text-xs">{errors.first_name && errors.first_name.message}</span>
                        </div>
                        <div className="form-group lg:w-1/3">
                            <label htmlFor="" className="block my-3">Lastname</label>
                            <input type="text" id="" className="border p-3 w-full"
                                {...register('second_name', {
                                    required: '* This field is required'
                                })}
                            />
                            <span className="text-red-600 text-xs">{errors.second_name && errors.second_name.message}</span>
                        </div>
                        <div className="form-group lg:w-1/3">
                            <label htmlFor="" className="block my-3">Gender</label>
                            <select id="" className="border p-3 w-full"
                                {...register('gender', {
                                    required: '* This field is required'
                                })}
                            >
                                <option value="MALE">MALE</option>
                                <option value="FEMALE">FEMALE</option>
                            </select>

                            <span className="text-red-600 text-xs">{errors.second_name && errors.second_name.message}</span>
                        </div>
                    </div>
                    <div className="lg:flex gap-5">

                        <div className="form-group lg:w-1/2">
                            <label htmlFor="" className="block my-3">Email</label>
                            <input type="email" id="" className="border p-3 w-full"
                                {...register('email', {
                                    required: '* This field is required'
                                })}
                            />
                            <span className="text-red-600 text-xs">{errors.email && errors.email.message}</span>
                        </div>


                        <div className="form-group lg:w-1/2">
                            <label htmlFor="" className="block my-3">Role</label>
                            <input type="text" id="" className="border p-3 w-full h-1/2"
                                {...register('role', {
                                    required: '* This field is required'
                                })}
                            />
                            <span className="text-red-600 text-xs">{errors.role && errors.role.message}</span>
                        </div>
                    </div>


                    <div className="form-group">
                        <label htmlFor="featured_image" className="text-gray-600 block my-3">
                            <span className="block my-3">Profile image</span>
                            <div
                                className="px-5 lg:px-12 border-2 border-dashed border-dark-500 py-5 lg:py-20 w-full h-1/2 cursor-pointer flex items-center justify-center hover:border-blue-700">
                                {!file ? (
                                    <CameraOutlined style={{ fontSize: "40px" }} />
                                ) : (
                                    <img src={file} alt="Featured image" className="create--featured-image" />
                                )}
                            </div>
                        </label>

                        <input type="file" id="featured_image" className="hidden" onChange={uploadImage}
                        />
                    </div>

                    {loading ? (
                        <button type="submit"
                            className="btn bg-blue-400 px-4 py-3 text-white mt-5 focus:outline-none flex gap-2 items-center rounded">
                            <LoadingOutlined />
                            Registering
                        </button>
                    ) : (
                        <button type="submit" className="btn bg-blue-700 px-4 py-3 text-white mt-5 focus:outline-none flex gap-2 items-center focus:outline-none rounded">
                            Register
                        </button>
                    )}
                </form>
            </div>

            {status === 1 &&
                <Alert
                    type="success"
                    message="Member created successfully"
                    autoClose={2000}
                    {
                    ...setTimeout(() => {
                        setStatus(-1)
                    }, 2000)
                    }
                />
            }
        </Dashboard>
    )
}