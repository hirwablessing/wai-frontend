import React, { useContext, useEffect, useState } from "react";
import {
    CameraOutlined,
    LoadingOutlined
} from '@ant-design/icons'

import { User } from "../types/User";
import { UserServices } from "../../pages/api/services/UserServices";
import { UserContext } from "../../pages/api/context/UserContext";
export default function ProfileImage(){
    
    const { user, logout } = useContext(UserContext)

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
    return(
        <div className="lg:w-1/2">
        <div className="flex justify-center items-center w-full">
            <div className="shadow rounded-full avatar--bg-block">
                {userData?.image ?
                    <img src={process.env.NEXT_PUBLIC_CLOUDINARY_URL + userData?.image} className="object-cover w-full h-full rounded-full" alt="Profile image" />
                    : <div className="flex items-center justify-center h-full">
                        <LoadingOutlined className="text-3xl text-gray-400 cursor-pointer" />
                    </div>
                }

            </div>
            

        </div>
        <div className="block flex justify-center w-full my-5">
                <CameraOutlined className="text-2xl text-gray-400 hover:text-blue-700 cursor-pointer" />
            </div>
    </div>
    )
}