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


  <div className="footer w-full lg:mt-12 p-5 px-5 lg:px-12 bg-blue-800 text-white">
    <div className="lg:flex">
      <div className="lg:w-1/3">
        <h1 className="font-bold my-2 text-xl text-white">Categories</h1>
        <Link href="/"><a className={router.pathname==='/'?"block my-2 text-white font-bold":"block my-2 hover:text-white hover:font-bold"}>Home</a></Link>
        <Link href="/aboutus"><a className={router.pathname==='/aboutus'?"block my-2 text-white font-bold":"block my-2 hover:text-white hover:font-bold"}>About us</a>
        </Link>
        <Link href="/takeaction"><a className={router.pathname==='/takeaction'?"block my-2 text-white font-bold":"block my-2 hover:text-white hover:font-bold"}>Take
          Action</a></Link>
        <Link href="/ourimpact"><a className={router.pathname==='/our-impact'?"block my-2 text-white font-bold":"block my-2 hover:text-white hover:font-bold"}>Our
          impact</a></Link>
        {/* <Link href="/women-advocacy"><a className={router.pathname==='/women-advocacy'?"block my-2 text-white font-bold":"block my-2 hover:text-white hover:font-bold"}>Women
          advocacy</a></Link> */}
        <Link href="/contact"><a className={router.pathname==='/contact'?"block my-2 text-white font-bold":"block my-2 hover:text-white hover:font-bold"}>Contact</a></Link>
      </div>

      <div className="lg:w-1/3">
        <h1 className="font-bold my-2 text-xl text-white">Connect with us</h1>
        <div className="flex gap-5 contact--icons-block">
          <span className={emailToggle?"cursor-pointer shadow":'cursor-pointer'}
            onClick={()=>setEmailToggle(!emailToggle)}>{ parse('' + icons.mailWhite + '')}</span>
          {emailToggle && <div className="card absolute shadow-lg bg-blue-600 px-5 py-3 mt-7">Mail us: <b>
              director@wai.com </b></div>}

          <a href="https://twitter.com">{ parse('' + icons.twitterWhite + '')}</a>
          <a href="https://facebook.com">{ parse('' + icons.fbWhite + '')}</a>
          <a href="https://instagram.com">{ parse('' + icons.igWhite + '')}</a>

        </div>
      </div>

      <div className="lg:w-1/3">
        <h1 className="font-bold my-2 text-xl text-white">Get Our Newsletter</h1>
        <form action="">
          <label htmlFor="">Enter your email address</label>
          <div className="flex items-center">
            <input type="email" name="" id="" className="w-full border form-control px-3 py-2 my-3 focus:outline-none"
              required />
            <button type="submit"
              className="bg-blue-600 hover:bg-blue-400 h-1/2 text-white px-3 py-2 focus:outline-none">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

  </div>
  {/* footer ends here */}
  {/* sub-footer */}
  <div className="bg-blue-800 w-full text-center text-white text-sm py-3">
    &copy; 2021 Allrights reserved ~ WAI
  </div>
  {/* sub-footer ends here */}
</div>
)
}