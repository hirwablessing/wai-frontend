import {useState} from 'react'
import parse from 'html-react-parser'
import Link from 'next/link'
import {useRouter} from 'next/router';
import {icons} from '../../utils/icons'
export default function navbar(){

const [navToggle,setNavToogle]=useState(false);
const router = useRouter();
return(
<>
    <div className="hidden lg:block bg-blue-800 text-white h-1/2 px-5 py-3 w-full top-0 sticky z-40 ">
        <div className="mx-auto lg:px-7 lg:flex items-center">
            <div className="lg:w-1/2 home--title hover text-sm uppercase cursor-pointer" onClick={()=>router.push('/')}> <span>World Amenders
                    International</span> <br />
                <span className="text-lg">WAI</span>
            </div>
            <div className="menu lg:w-1/2 lg:flex gap-5 justify-end text-xs mt-5 lg:mt-0 items-center cursor-pointer">
                <Link href="/"><a className={router.pathname==='/'?"uppercase block text-blue-700 font-bold hover:font-bold":'uppercase block hover:text-blue-700 hover:font-bold'}>HOME</a></Link>
                <Link href="/aboutus"><a className={router.pathname==='/aboutus'?"uppercase block text-blue-700 font-bold hover:font-bold":'uppercase block hover:text-blue-700 hover:font-bold'}>ABOUT US</a>
                </Link>
                <Link href="/takeaction"><a className={router.pathname==='/takeaction'?"uppercase block text-blue-700 font-bold hover:font-bold":'uppercase block hover:text-blue-700 hover:font-bold'}>Take
                    Action</a></Link>
                <Link href="/ourimpact"><a className={router.pathname==='/ourimpact'?"uppercase block text-blue-700 font-bold hover:font-bold":'uppercase block hover:text-blue-700 hover:font-bold'}>our
                    impact</a></Link>
                {/* <Link href="/women-advocacy"><a className={router.pathname==='/women-advocacy'?"uppercase block text-blue-700 font-bold hover:font-bold":'uppercase block hover:text-blue-700 hover:font-bold'}>women
                    advocacy</a></Link> */}
                <Link href="/contact"><a
                    className="uppercase block bg-blue-700 text-white px-2 py-3 rounded hover:bg-blue-600">
                    CONTACT
                    US </a></Link>
            </div>

        </div>
    </div>

    {/* navbar responsiveness */}
    <div className="block lg:hidden bg-blue-800 h top-0 sticky px-5 py-3 w-full flex items-center gap-4" onClick={()=>router.push('/')}>
        <div className="w-3/4 home--title text-white text-sm uppercase "> <span>World Amenders
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
            className="menu z-40  w-full lg:flex gap-3 justify-end text-sm items-center p-5 absolute bg-white shadow-lg top-4 right-0 mt-14 md:12 z-40 cursor-pointer">
            <Link href="/"><a className="uppercase my-3 block hover:text-blue-700 hover:font-bold">HOME</a></Link>
            <Link href="/aboutus"><a className="uppercase my-3 block hover:text-blue-700 hover:font-bold">ABOUT US</a>
            </Link>
            <Link href="/takeaction"><a className="uppercase my-3 block hover:text-blue-700 hover:font-bold">Take
                Action</a></Link>
          <Link href="/ourimpact"><a className="uppercase my-3 block hover:text-blue-700 hover:font-bold">our
                impact</a></Link>
            {/* <Link href="/women-advocacy"><a className="uppercase my-3 block hover:text-blue-700 hover:font-bold">women
                advocacy</a></Link> */}
            <Link href="/contact"><a
                className="uppercase block bg-blue-700 text-white px-2 py-3 rounded font-bold hover:bg-blue-600">CONTACT
                US</a></Link>
        </div>
        }
    </div>
</>
)
}