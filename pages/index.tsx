import {icons} from '../utils/icons'
import {useState} from 'react'
import parse from 'html-react-parser'
export default function Home() {
  const [navToggle,setNavToogle]=useState(false);
return (
<div>
  {/* navigation bar */}
  <div className="hidden lg:block bg-white shadow h-1/2 px-5 py-3 w-full top-0 sticky">
    <div className="mx-auto lg:w-3/4 lg:flex items-center">
      <div className="lg:w-1/2 home--title text-blue-600 text-sm font-bold uppercase"> <span>World Amenders
          International</span> <br />
        <span className="text-lg text-yellow-500">WAI</span>
      </div>
      <div className="menu lg:w-1/2 lg:flex gap-3 justify-end text-sm mt-5 lg:mt-0 items-center">
        <a href="" className="uppercase block hover:text-blue-600 hover:font-bold">HOME</a>
        <a href="" className="uppercase block hover:text-blue-600 hover:font-bold">ABOUT US</a>
        <a href="" className="uppercase block hover:text-blue-600 hover:font-bold">Take Action</a>
        <a href="" className="uppercase block hover:text-blue-600 hover:font-bold">our impact</a>
        <a href="" className="uppercase block hover:text-blue-600 hover:font-bold">women advocacy</a>
        <a href=""
          className="uppercase block bg-blue-600 text-white px-2 py-3 rounded font-bold hover:bg-blue-800">CONTACT
          US</a>
      </div>

    </div>
  </div>

  {/* navbar responsiveness */}
  <div className="block lg:hidden bg-white h top-0 sticky px-5 py-3 w-full flex items-center gap-4">
    <div className="w-3/4 home--title text-blue-600 text-sm font-bold uppercase"> <span>World Amenders
        International</span> <br />
      <span className="text-lg text-yellow-500">WAI</span>
    </div>
    <div className="w-1/4 flex justify-end" onClick={()=>{setNavToogle(!navToggle)}}>
      {!navToggle?
      parse('' + icons.menu + '')
      :
      parse('' + icons.close + '')}
    </div>

  {navToggle &&
    <div className="menu w-full lg:flex gap-3 justify-end text-sm items-center p-5 absolute bg-white top-5 right-0 mt-14 md:12">
    <a href="" className="uppercase my-3 block hover:text-blue-600 hover:font-bold">HOME</a>
    <a href="" className="uppercase my-3 block hover:text-blue-600 hover:font-bold">ABOUT US</a>
    <a href="" className="uppercase my-3 block hover:text-blue-600 hover:font-bold">Take Action</a>
    <a href="" className="uppercase my-3 block hover:text-blue-600 hover:font-bold">our impact</a>
    <a href="" className="uppercase my-3 block hover:text-blue-600 hover:font-bold">women advocacy</a>
    <a href=""
      className="uppercase block bg-blue-600 text-white px-2 py-3 rounded font-bold hover:bg-blue-800">CONTACT
      US</a>
  </div>
  }
  </div>

  {/* main body image */}
  <div className="text-white">
    <img src="/bg-image.jpg" alt="" className="w-full object-cover" style={{height:'500px'}} />
  </div>

  <div className="">
  
    Porro, vitae. Cupiditate culpa commodi quae assumenda in, architecto quam ipsam laboriosam quos repudiandae repellat
    pariatur quas officiis illum deleniti ullam quasi provident numquam ducimus repellendus at incidunt corporis labore.
  </div>

</div>
)
}
