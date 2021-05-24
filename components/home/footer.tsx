import {useState} from 'react'
import parse from 'html-react-parser'
import {icons} from '../../utils/icons'
export default function footer(){
    
// e-mail toggled
const [emailToggle, setEmailToggle] = useState(false);
    return(
        <div>
            

  <div className="footer w-full lg:mt-12 text-dark-500 p-5 bg-white px-5 lg:px-12">
    <div className="lg:flex">
      <div className="lg:w-1/3">
        <h1 className="font-bold my-2 text-xl text-yellow-500">Categories</h1>
        <ul>
          <li className="my-2">Home</li>
          <li className="my-2">About us</li>
          <li className="my-2">Take action</li>
          <li className="my-2">Our Impact</li>
          <li className="my-2">Women advocacy</li>
          <li className="my-2">Contact us</li>
        </ul>
      </div>

      <div className="lg:w-1/3">
        <h1 className="font-bold my-2 text-xl text-yellow-500">Connect with us</h1>
        <div className="flex gap-5 contact--icons-block"> 
        <span className={emailToggle?"cursor-pointer shadow":'cursor-pointer'} onClick={()=>setEmailToggle(!emailToggle)}>{ parse('' + icons.mail + '')}</span>
          {emailToggle && <div className="card absolute shadow-lg bg-yellow-200 px-5 py-3 mt-7">Mail us: <b>
              director@wai.com </b></div>}

          <a href="https://twitter.com">{ parse('' + icons.twitter + '')}</a>
          <a href="https://facebook.com">{ parse('' + icons.fb + '')}</a>
          <a href="https://instagram.com">{ parse('' + icons.ig + '')}</a>

        </div>
      </div>

      <div className="lg:w-1/3">
        <h1 className="font-bold my-2 text-xl text-yellow-500">Get Our Newsletter</h1>
        <form action="">
          <label htmlFor="">Enter your email address</label>
          <div className="flex items-center">
            <input type="email" name="" id="" className="w-full border form-control px-3 py-2 my-3 focus:outline-none"
              required />
            <button type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 h-1/2 text-white px-3 py-2 focus:outline-none">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

  </div>
  {/* footer ends here */}
  {/* sub-footer */}
  <div className="bg-yellow-500 w-full text-center text-white text-sm py-3">
    &copy; 2021 Allrights reserved ~ WAI
  </div>
  {/* sub-footer ends here */}
        </div>
    )
}