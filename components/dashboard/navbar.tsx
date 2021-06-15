import Link from "next/link";
import { useRouter} from "next/router";
import {useContext, useEffect, useState} from "react";
import {UserContext} from '../../pages/api/context/UserContext'
import {UserServices} from '../../pages/api/services/UserServices'
import { User } from "../types/User";
// require('dotenv').config()

export default function navbar(){
    
    const router = useRouter();
    const services = new UserServices();
    const [toggle,setToggle] = useState(false);
    const {user,logout} = useContext(UserContext)
    const first_name = user.first_name || ''
    const last_name = user.second_name || ''
    const [userData,setUserData] = useState<User>(
        {
            _id:'',
            first_name:'',
            second_name:'',
            email:'',
            password:'',
            phone:0,
            image:'',
            gender:'',
            active:true,
            createdAt:'',
            updatedAt:'',
        
        }
    );

    useEffect(() => {
         const fetchUser = async()=>{
         let data = await services.getUser(user._id)
        setUserData(data.message);
        }
        fetchUser();
    },[user])
console.log(process.env.NEXT_PUBLIC_CLOUDINARY_URL)

return(
<div className="hidden lg:block">
    <div className="bg-white px-5 py-3 flex items-center gap-10">
        <div className="lg:w-1/2">
            <input type="text" placeholder="search dashboard" className="w-full rounded-full bg-gray-50 px-10 py-3 text-sm text-dark-500 focus:outline-none" />
        </div>
        <div className="lg:w-1/2 flex justify-end items-center gap-3">
        <h1 className="font-bold text-sm">{user.first_name} {user.second_name}</h1>
           
                    {userData?.image?
                    <div className="cursor-pointer rounded-full text-center shadow avatar--image flex items-center text-white font-bold  justify-center"
                    onClick={() => setToggle(!toggle)}
                    >
                    <img src={process.env.NEXT_PUBLIC_CLOUDINARY_URL+userData?.image} className="object-cover w-full h-full rounded-full" alt="Profile image" />
                    </div>
                : <div
                className="cursor-pointer rounded-full text-center bg-blue-700 avatar--image flex items-center text-white font-bold  justify-center"
                onClick={() => setToggle(!toggle)}
                >
                {(first_name.toUpperCase())[0]}   {(last_name.toUpperCase())[0]}
                
                </div>
                }
                {toggle &&
                <div className="bg-white shadow p-5 absolute float-right lg:top-5 mt-12 z-40">
                    <Link href="/panel/settings/profile">
                    <a className="w-full block my-2 text-sm text-gray-600 hover:text-blue-700">Profile settings</a>
                    </Link>
                    <hr />
                    <Link href="/panel/settings/changepassword">
                    <a className="w-full block my-2 text-sm text-gray-600 hover:text-blue-700">Change password</a>
                    </Link>
                    <hr />
                    <span className="w-full block my-2 text-sm text-gray-600 hover:text-blue-700 cursor-pointer" onClick={logout}>Logout</span>
               
                </div>
}
        </div>
    </div>
</div>
)
}