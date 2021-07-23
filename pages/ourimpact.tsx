import Navbar from '../components/home/navbar'
import Footer from '../components/home/footer'
export default function ourimpact(){
return(
<div>
    {/* navigation bar */}
    <Navbar
     textColor="text-black"
     bgColor="bg-white"
     activeColor="text-blue-500"
     hoverColor="text-blue-500"
    />
    {/* main body*/}
    <div className="p-5 lg:px-20 py-10">
    <div className="bg-blue-gradient p-10 font-bold text-xl text-white">
           Our Impact
        </div>

        <div className="w-full h-screen">
            
        </div>
    </div>
    {/* main body ends here */}
    {/* footer */}
    <hr className="hidden lg:block" />
    <Footer />

</div>
)
}