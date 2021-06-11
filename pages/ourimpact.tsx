import Navbar from '../components/home/navbar'
import Footer from '../components/home/footer'
export default function ourimpact(){
return(
<div>
    {/* navigation bar */}
    <Navbar />
    {/* main body*/}
    <div className="p-5 lg:px-20 py-10">
    <div className="bg-blue-50 p-10 font-bold text-2xl text-blue-700 my-10">
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