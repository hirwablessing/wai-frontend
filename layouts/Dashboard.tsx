import Sidebar from "../components/dashboard/sidebar"
import Navbar from "../components/dashboard/navbar"

export default function Dashboard({children}:any){
    return(
        <div className="block lg:flex gap-7 bg-gray-50">
    {/* sidebar */}
    <Sidebar />
    <div className="lg:w-4/5 min-h-screen">
        <div className="">
            <Navbar />
            {/* navbar ends here */}
                {children}
            {/* main body starts here */}
          
        </div>
    </div>


</div>
    )
}