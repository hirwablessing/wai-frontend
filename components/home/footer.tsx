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


  <div className="footer w-full lg:mt-12 p-5 px-5 lg:px-12">
    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      <div className="text-gray-500">
        <h1 className="font-bold my-2 text-md text-black ">Categories</h1>
        <div className="text-xs">
        <Link href="/"><a className={router.pathname==='/'?"block my-2  font-bold":"block my-2 hover: hover:font-bold"}>Home</a></Link>
        <Link href="/aboutus"><a className={router.pathname==='/aboutus'?"block my-2  font-bold":"block my-2 hover: hover:font-bold"}>About us</a>
        </Link>
        <Link href="/takeaction"><a className={router.pathname==='/takeaction'?"block my-2  font-bold":"block my-2 hover: hover:font-bold"}>Take
          Action</a></Link>
        <Link href="/ourimpact"><a className={router.pathname==='/our-impact'?"block my-2  font-bold":"block my-2 hover: hover:font-bold"}>Our
          impact</a></Link>
        {/* <Link href="/women-advocacy"><a className={router.pathname==='/women-advocacy'?"block my-2  font-bold":"block my-2 hover: hover:font-bold"}>Women
          advocacy</a></Link> */}
        <Link href="/contact"><a className={router.pathname==='/contact'?"block my-2  font-bold":"block my-2 hover: hover:font-bold"}>Contact</a></Link>
        </div>
      </div>

      <div className="text-gray-500">
        <h1 className="font-bold my-2 text-md text-black ">Connect with us</h1>
        <div className="flex gap-5 contact--icons-block">
          <span className={emailToggle?"cursor-pointer shadow":'cursor-pointer'}
            onClick={()=>setEmailToggle(!emailToggle)}>{ parse('' + icons.mailWhite + '')}</span>
          {emailToggle && <div className="card absolute text-xs shadow-lg bg-blue-600 px-5 py-3 mt-7 text-white">Mail us:
              director@wai.com</div>}

          <a href="https://twitter.com">{ parse('' + icons.twitterWhite + '')}</a>
          <a href="https://facebook.com">{ parse('' + icons.fbWhite + '')}</a>
          <a href="https://instagram.com">{ parse('' + icons.igWhite + '')}</a>

        </div>
      </div>

      <div className="text-gray-500">
      <h1 className="font-bold my-2 text-md text-black ">Trending articles</h1>
<div className="text-xs ml-5">
<ul>
        <li className="list-disc">Lorem ipsum</li>
        <li className="list-disc">Lorem ipsum Lorem ipsum</li>
        <li className="list-disc">Lorem ipsum Lorem ipsum</li>
        <li className="list-disc">Lorem ipsum</li>
      </ul>
</div>
     
      </div>

      <div className="text-gray-500">
        <h1 className="font-bold my-2 text-md text-black ">Get Our Newsletter</h1>
        <form action="" className="text-xs">
          <label htmlFor="">Enter your email address</label>
          <div className="flex items-center">
            <input type="email" name="" id="" className="w-full border form-control px-3 py-2 my-3 focus:outline-none"
              required />
            <button type="submit"
              className="bg-blue-600 hover:bg-blue-400 h-1/2  px-3 py-2 focus:outline-none text-white">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

  </div>
  {/* footer ends here */}
  {/* sub-footer */}
  <div className="w-full text-center  text-xs py-3">
    &copy; {new Date().getFullYear()} Alrights reserved ~ <b>World Amenders International💖</b>
  </div>
  {/* sub-footer ends here */}
</div>
)
}