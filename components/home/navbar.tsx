import {useState} from 'react'
import parse from 'html-react-parser'
import Link from 'next/link'
import {useRouter} from 'next/router';
import {icons} from '../../utils/icons'

type Prop = {
    textColor: string,
    bgColor:string,
    hoverColor:string,
    activeColor:string
}
export default function navbar(props: Prop){

const [navToggle,setNavToogle]=useState(false);
const router = useRouter();
return(
<>
    <div className={`hidden lg:block ${props.bgColor+' '+ props.textColor} h-1/2 px-5 py-3 w-full top-0 sticky z-40 shadow`}>
        <div className="mx-auto lg:px-7 lg:flex items-center">
            <div className="lg:w-1/2 home--title hover text-sm capitalize cursor-pointer font-bold" onClick={()=>router.push('/')}> <span>World Amenders
                    International</span> <br />
                <span className="text-lg">WAI</span>
            </div>
            <div className="menu lg:w-1/2 lg:flex gap-5 justify-end text-xs mt-5 lg:mt-0 items-center cursor-pointer">
                <Link href="/"><a className={router.pathname==='/'?`capitalize block ${props.activeColor} font-bold hover:${props.hoverColor}`:`capitalize block hover:${props.hoverColor} hover:font-bold`}>Home</a></Link>
                <Link href="/aboutus"><a className={router.pathname==='/aboutus'?`capitalize block ${props.activeColor} font-bold hover:${props.hoverColor}`:`capitalize block hover:${props.hoverColor} hover:font-bold`}>About us</a>
                </Link>
                <Link href="/takeaction"><a className={router.pathname==='/takeaction'?`capitalize block ${props.activeColor} font-bold hover:${props.hoverColor}`:`capitalize block hover:${props.hoverColor} hover:font-bold`}>Take
                    Action</a></Link>
                <Link href="/ourimpact"><a className={router.pathname==='/ourimpact'?`capitalize block ${props.activeColor} font-bold hover:${props.hoverColor}`:`capitalize block hover:${props.hoverColor} hover:font-bold`}>Our
                    impact</a></Link>
                {/* <Link href="/women-advocacy"><a className={router.pathname==='/women-advocacy'?"capitalize block text-white font-bold hover:font-bold":'capitalize block hover:text-white hover:font-bold'}>women
                    advocacy</a></Link> */}
                <Link href="/contact"><a
                    className="capitalize block bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-600">
                  Contact us </a></Link>
            </div>

        </div>
    </div>

    {/* navbar responsiveness */}
    <div className="block lg:hidden bg-blue-gradient h top-0 sticky px-5 py-3 w-full flex items-center gap-4">
        <div className="w-3/4 home--title text-white text-sm capitalize " onClick={()=>router.push('/')}> <span>World Amenders
                International</span> <br />
            <span className="text-lg  text-white">WAI</span>
        </div>
        <div className="w-1/4 flex justify-end cursor-pointer" onClick={()=>{setNavToogle(!navToggle)}}>
            {!navToggle?
            parse('' + icons.menu + '')
            :
            parse('' + icons.close + '')}
        </div>

        {navToggle &&
        <div
            className="menu z-40  w-full lg:flex gap-3 justify-end text-sm items-center p-5 absolute bg-blue-gradient shadow-lg top-2 right-0 mt-14 md:12 z-40 cursor-pointer">
            <hr />
            <Link href="/"><a className="capitalize my-3 block hover:text-white text-white hover:font-bold">Home</a></Link>
            <Link href="/aboutus"><a className="capitalize my-3 block hover:text-white text-white hover:font-bold">About us</a>
            </Link>
            <Link href="/takeaction"><a className="capitalize my-3 block hover:text-white text-white hover:font-bold">Take
                Action</a></Link>
          <Link href="/ourimpact"><a className="capitalize my-3 block hover:text-white text-white hover:font-bold">Our
                impact</a></Link>
            {/* <Link href="/women-advocacy"><a className="capitalize my-3 block hover:text-white text-white hover:font-bold">women
                advocacy</a></Link> */}
            <Link href="/contact"><a
                className="capitalize my-3 block hover:text-white text-white hover:font-bold">Contact us</a></Link>
        </div>
        }
    </div>
</>
)
}