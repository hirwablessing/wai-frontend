import Sidebar from "../components/dashboard/sidebar"
import Navbar from "../components/dashboard/navbar"
import { useContext } from "react"
import { UserContext } from '../pages/api/context/UserContext'
import { LoadingOutlined } from '@ant-design/icons';

export default function Dashboard({ children }: any) {
    const { checking } = useContext(UserContext)
    console.log("checking ", checking)
    if (checking) {
        return <div className="h-screen flex items-center justify-center">
            <div className="text-center">
                <LoadingOutlined className="text-5xl my-5 text-blue-700" />
                <p>Checking ...</p>
            </div>

        </div>
    }
    return (
        <div className="block lg:flex gap-7 bg-gray-50 text-sm">
            {/* sidebar */}
            <div className="top-0 sticky z-40 lg:h-screen lg:w-1/5">
                <Sidebar />
            </div>
            <div className="lg:w-4/5 min-h-screen">
                <div className="">
                    {/* navbar */}
                    <Navbar />
                    {/* main body */}
                    {children}

                </div>
            </div>


        </div>
    )
}