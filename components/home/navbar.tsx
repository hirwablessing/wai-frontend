import {useState} from 'react'
import parse from 'html-react-parser'
import {icons} from '../../utils/icons'
export default function navbar(){

const [navToggle,setNavToogle]=useState(false);
return(
<>
    <div className="hidden lg:block bg-white shadow h-1/2 px-5 py-3 w-full top-0 sticky">
        <div className="mx-auto lg:px-7 lg:flex items-center">
            <div className="lg:w-1/2 home--title text-yellow-500 text-sm uppercase"> <span>World Amenders
                    International</span> <br />
                <span className="text-lg font-bold text-yellow-500">WAI</span>
            </div>
            <div className="menu lg:w-1/2 lg:flex gap-5 justify-end text-xs mt-5 lg:mt-0 items-center cursor-pointer">
                <a href="" className="uppercase block hover:text-yellow-600 hover:font-bold">HOME</a>
                <a href="" className="uppercase block hover:text-yellow-600 hover:font-bold">ABOUT US</a>
                <a href="" className="uppercase block hover:text-yellow-600 hover:font-bold">Take Action</a>
                <a href="" className="uppercase block hover:text-yellow-600 hover:font-bold">our impact</a>
                <a href="" className="uppercase block hover:text-yellow-600 hover:font-bold">women advocacy</a>
                <a href=""
                    className="uppercase block bg-yellow-500 text-white px-2 py-3 rounded font-bold hover:bg-yellow-600">CONTACT
                    US</a>
            </div>

        </div>
    </div>

    {/* navbar responsiveness */}
    <div className="block lg:hidden shadow bg-white h top-0 sticky px-5 py-3 w-full flex items-center gap-4">
        <div className="w-3/4 home--title text-yellow-500 text-sm uppercase"> <span>World Amenders
                International</span> <br />
            <span className="text-lg font-bold text-yellow-500">WAI</span>
        </div>
        <div className="w-1/4 flex justify-end cursor-pointer" onClick={()=>{setNavToogle(!navToggle)}}>
            {!navToggle?
            parse('' + icons.menu + '')
            :
            parse('' + icons.close + '')}
        </div>

        {navToggle &&
        <div
            className="menu w-full lg:flex gap-3 justify-end text-sm items-center p-5 absolute bg-white shadow-lg top-4 right-0 mt-14 md:12 z-40 cursor-pointer">
            <a href="" className="uppercase my-3 block hover:text-yellow-600 hover:font-bold">HOME</a>
            <a href="" className="uppercase my-3 block hover:text-yellow-600 hover:font-bold">ABOUT US</a>
            <a href="" className="uppercase my-3 block hover:text-yellow-600 hover:font-bold">Take Action</a>
            <a href="" className="uppercase my-3 block hover:text-yellow-600 hover:font-bold">our impact</a>
            <a href="" className="uppercase my-3 block hover:text-yellow-600 hover:font-bold">women advocacy</a>
            <a href=""
                className="uppercase block bg-yellow-500 text-white px-2 py-3 rounded font-bold hover:bg-yellow-600">CONTACT
                US</a>
        </div>
        }
    </div>
</>
)
}