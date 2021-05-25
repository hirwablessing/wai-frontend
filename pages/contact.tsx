import Navbar from '../components/home/navbar'
import Footer from '../components/home/footer'
import News from '../components/home/news'
export default function Contact() {
return (

<div>
  {/* navigation bar */}
  <Navbar />

  {/* main body image */}
    <div className="lg:flex gap-12 mx-auto lg:w-2/3 p-5">
        <div className="shadow-lg lg:w-1/2 p-5 h-1/2">
           <div className="title font-bold text-gray-500 text-xl">Contact us</div>
             </div>
        <div className="bg-white lg:w-1/2">

            <form action="">
                <div className="title  text-gray-500 text-xl my-5"> <span className="font-bold"> Contact us form</span>
                <div className="sub-title text-sm text-gray-400">- Fill out the information</div>
                <div className="sub-title text-sm text-gray-400">- Field marked with *, is required</div>
                </div>
                <div className="lg:flex w-full gap-5">
                <div className="form-group lg:w-1/2">
                    <label htmlFor="" className="text-gray-600 block my-3">Names</label>
                    <input type="text" name="" id="" className="border p-3 w-full" />
                </div>
                <div className="form-group lg:w-1/2">
                    <label htmlFor="" className="text-gray-600 block my-3">Email</label>
                    <input type="email" name="" id="" className="border p-3 w-full" />
                </div>
                </div>
                <div className="form-group">
                    <label htmlFor="" className="text-gray-600 block my-3">Message</label>
                    <textarea  name="" id="" className="border h-2/3 p-3 w-full"></textarea>
                </div>
            </form>
        </div>
    </div>

  {/* main body ends here */}
  <hr />
  {/* footer */}
  <hr />
  <Footer />

</div>
)
}
