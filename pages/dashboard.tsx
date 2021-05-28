import HomeDashboard from "../components/dashboard/HomeDashboard"
import Navbar from "../components/dashboard/navbar"
import Sidebar from "../components/dashboard/sidebar"

export default function dashboard(){
    return(
        <div className="block lg:flex gap-7 bg-gray-50">
           {/* sidebar */}
           <Sidebar/>
            <div className="lg:w-4/5 min-h-screen  overflow-y-auto">
                <div className="h-screen">
                    {/* navbar */}
                 <Navbar/>
                    {/* navbar ends here */}

                    {/* main body starts here */}
                    <div className="main--body p-10 my-5 bg-white">
                        <HomeDashboard/>
                    </div>
                </div>
            </div>


        </div>
    )
}