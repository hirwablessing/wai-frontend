import { useForm } from 'react-hook-form'
import dynamic from "next/dynamic";
import React, { useContext, useState } from 'react'
import { Posts } from '../../api/services/Posts';
import { LoadingOutlined } from '@ant-design/icons';
import { UserContext } from '../../api/context/UserContext';
import { PasswordChange } from '../../../components/types/GeneralTypes';
import Dashboard from '../../../layouts/Dashboard';
import Link from 'next/link';
import { UserServices } from '../../api/services/UserServices';
import Alert from '../../../components/dashboard/toasts/Alert';
import ProfileImage from '../../../components/dashboard/profileImage';

export default function changepassword() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(-1) // checking if there's no error while updating

    // error log
    const [errorLog, setErrorLog] = useState('')

    // call user context
    const { user } = useContext(UserContext)

    const handleForm = async (data: any) => {
        setLoading(true)

        const services = new UserServices();

        // console.log(data)

        if (data.new_password !== data.confirm_password) {
            setErrorLog("Passwords don't match")
            setLoading(false)
        }
        const body: PasswordChange = {
            currentPassword: data.old_password,
            newPassword: data.new_password
        }

        try {
            let response = await services.updatePassword(user?._id, body)
            setLoading(false)
            setErrorLog("")
            setStatus(1)

        } catch (e) {
            setErrorLog(e.response.data.message);
            setLoading(false)
        }
    }

    return (
        <Dashboard>
            <div className="main--body p-10 my-5 bg-white">
                <h1 className="font-bold">Settings / Change password</h1>
                <div className="lg:flex gap-5">
                    <div className="my-10 lg:w-1/2">
                        {errorLog !== '' &&
                            <p className="text-red-400 text-sm">{errorLog}</p>
                        }
                        <form className="text-sm" onSubmit={handleSubmit((data) => { handleForm(data) })}>

                            <div className="lg:flex w-full gap-5">
                                <div className="form-group lg:w-1/3">
                                    <label htmlFor="" className="text-gray-600 block my-3">Old password </label>
                                    <input type="password" id="" className="border p-3 w-full" {...register('old_password', {
                                        required: '* This field is required'
                                    })} />
                                    <span className="text-red-600 text-xs">{errors.old_password &&
                                        errors.old_password.message}</span>
                                </div>
                                <div className="form-group lg:w-1/3">
                                    <label htmlFor="" className="text-gray-600 block my-3">New password </label>
                                    <input type="password" id="" className="border p-3 w-full" {...register('new_password', {
                                        required: '* This field is required'
                                    })} />
                                    <span className="text-red-600 text-xs">{errors.new_password &&
                                        errors.new_password.message}</span>
                                </div>
                                <div className="form-group lg:w-1/3">
                                    <label htmlFor="" className="text-gray-600 block my-3">Confirm password </label>
                                    <input type="password" id="" className="border p-3 w-full" {...register('confirm_password', {
                                        required: '* This field is required'
                                    })} />
                                    <span className="text-red-600 text-xs">{errors.confirm_password &&
                                        errors.confirm_password.message}</span>
                                </div>
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
                            <Link href="/panel/settings/profile">
                                <a className="text-gray-400 text-sm my-5 hover:underline cursor-pointer">Change profile settings</a>
                            </Link>

                        </div>

                    </div>
                        <ProfileImage/>

                </div>

            </div>

            {status === 1 &&
                <Alert
                    type="success"
                    message="Password updated successfully"
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