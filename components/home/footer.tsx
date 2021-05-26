import {useState} from 'react'
import parse from 'html-react-parser'
import {icons} from '../../utils/icons'
import Link from 'next/link'
import {useRouter} from 'next/router';
export default function footer(){

// e-mail toggled
const [emailToggle, setEmailToggle] = useState(false);

const router = useRouter();
return(
<div>


  <div className="footer w-full lg:mt-12 text-dark-500 p-5 bg-white px-5 lg:px-12">
    <div className="lg:flex">
      <div className="lg:w-1/3">
        <h1 className="font-bold my-2 text-xl text-yellow-500">Categories</h1>
        <Link href="/"><a className={router.pathname==='/'?"block my-2 text-yellow-500 font-bold":"block my-2 hover:text-yellow-500 hover:font-bold"}>Home</a></Link>
        <Link href="/about"><a className={router.pathname==='/about'?"block my-2 text-yellow-500 font-bold":"block my-2 hover:text-yellow-500 hover:font-bold"}>About us</a>
        </Link>
        <Link href="/take-action"><a className={router.pathname==='/take-action'?"block my-2 text-yellow-500 font-bold":"block my-2 hover:text-yellow-500 hover:font-bold"}>Take
          Action</a></Link>
        <Link href="/our-impact"><a className={router.pathname==='/our-impact'?"block my-2 text-yellow-500 font-bold":"block my-2 hover:text-yellow-500 hover:font-bold"}>Our
          impact</a></Link>
        <Link href="/women-advocacy"><a className={router.pathname==='/women-advocacy'?"block my-2 text-yellow-500 font-bold":"block my-2 hover:text-yellow-500 hover:font-bold"}>Women
          advocacy</a></Link>
        <Link href="/contact"><a className={router.pathname==='/contact'?"block my-2 text-yellow-500 font-bold":"block my-2 hover:text-yellow-500 hover:font-bold"}>Contact</a></Link>
      </div>

      <div className="lg:w-1/3">
        <h1 className="font-bold my-2 text-xl text-yellow-500">Connect with us</h1>
        <div className="flex gap-5 contact--icons-block">
          <span className={emailToggle?"cursor-pointer shadow":'cursor-pointer'}
            onClick={()=>setEmailToggle(!emailToggle)}>{ parse('' + icons.mail + '')}</span>
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