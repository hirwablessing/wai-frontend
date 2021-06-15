import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { User } from "../types/User";
import { UserServices } from "../../pages/api/services/UserServices";
import { UserContext } from "../../pages/api/context/UserContext";
import {
    CameraOutlined,
    LoadingOutlined
} from '@ant-design/icons'
import ProfileImage from "./ProfileImage";

export default function ProfileSettings() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [loading, setLoading] = useState(false)
    const handleForm = async (data: any) => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
        setLoading(true)
        console.log(data.names, data.email, data.smessage)
    }

    const { user } = useContext(UserContext)

    const services = new UserServices();
    const [userData, setUserData] = useState<User>(
        {
            _id: '',
            first_name: '',
            second_name: '',
            email: '',
            password: '',
            phone: 0,
            image: '',
            gender: '',
            active: true,
            createdAt: '',
            updatedAt: '',

        }
    );

    useEffect(() => {
        const fetchUser = async () => {
            let data = await services.getUser(user._id)
            setUserData(data.message);
        }
        fetchUser();
    }, [user])
    return (
        <div className="main--body p-10 my-5 bg-white">
            <h1 className="font-bold">Settings / Profile settings</h1>
            <div className="lg:flex gap-10">
                <div className="my-10 lg:w-1/2">
                    <form onSubmit={handleSubmit((data) => { handleForm(data) })}>

                        <div className="lg:flex w-full gap-5">
                            <div className="form-group lg:w-1/2">
                                <label htmlFor="" className="text-gray-600 block my-3">Firstname </label>
                                <input type="text" id="" className="border p-3 w-full" {...register('firstname', {
                                    required: '* This field is required'
                                })} />
                                <span className="text-red-600 text-xs">{errors.firstname &&
                                    errors.firstname.message}</span>
                            </div>
                            <div className="form-group lg:w-1/2">
                                <label htmlFor="" className="text-gray-600 block my-3">Lastname </label>
                                <input type="text" id="" className="border p-3 w-full" {...register('lastname', {
                                    required: '* This field is required'
                                })} />
                                <span className="text-red-600 text-xs">{errors.lastname &&
                                    errors.lastname.message}</span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="text-gray-600 block my-3">Email </label>
                            <input type="email" id="" className="border p-3 w-full" {...register('email', {
                                required: '* This field is required'
                            })} />
                            <span className="text-red-600 text-xs">{errors.email && errors.email.message}</span>
                        </div>

                        <div>
                            {loading ?
                                <button type="submit"
                                    className="btn bg-blue-400 px-4 py-3 text-white float-right my-5 focus:outline-none flex gap-2 items-center">
                                    <LoadingOutlined />Updating</button> :
                                <button type="submit"
                                    className="btn bg-blue-700 px-4 py-3 text-white float-right my-5 focus:outline-none">Update</button>
                            }

                        </div>
                    </form>
                    <div className="my-10">
                        <Link href="/panel/settings/changepassword">
                            <a className="text-gray-400 text-sm hover:underline cursor-pointer">Change password</a>
                        </Link>

                    </div>


                </div>

                {/* profile image */}
                <ProfileImage />


            </div>
        </div>
    )
}