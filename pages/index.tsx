import {icons} from '../utils/icons'
import {useState} from 'react'
import parse from 'html-react-parser'
export default function Home() {
  const [navToggle,setNavToogle]=useState(false);
return (

<div>
  {/* navigation bar */}
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
    <div className="menu w-full lg:flex gap-3 justify-end text-sm items-center p-5 absolute bg-white shadow-lg top-4 right-0 mt-14 md:12 z-40 cursor-pointer">
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

  {/* main body image */}
  <div className="bg--img-block py-12">
    <div className="text-white  lg:w-1/2 mt-16 lg:px-12">
      <h1 className="ml-2" style={{fontSize:'35px'}}>WORLD AMENDERS INTERNATIONAL</h1>
      <p className="ml-2 text-xl my-3">"We are a young, but strong, voice for the unheard."</p>
      
    
      <a href="" className="mx-2 block text-center lg:w-1/2 btn bg-yellow-500 hover:bg-yellow-600 text-white rounded p-4 text-sm my-12">Take an action and become an Amender</a>

    </div>
  </div>



{/* main body content */}
  <div className="px-5 lg:px-0">
    <div className="upper--block my-12 lg:w-2/3 m-auto">
      <div className="title text-yellow-500 font-bold text-xl text-center">__ OUR MISSION __</div>
      <div className="mission--title text-center my-12">
      Commissioned by Christ, wherever we go, we strive to better the lives of the neediest and encourage young people to use their powerful energy, fearless spirit, and creative minds in launching humanitarian actions and advocacy to make hunger, poverty, and injustice unknown to the next generations. 

      </div>
      
      <div className="title text-yellow-500 font-bold text-xl text-center">__ WAI __</div>
      <div className="lg:flex gap-12 my-5 items-center">
        <div className="w-full lg:w-1/2">
          <h1 className="font-bold text-gray-600 text-lg">
          Opening verse</h1> 
          <br />
          Whoever oppresses the poor insults their Maker, but those who are generous to the needy honors Him (14: 31) 

            </div>
        <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
          <img src="/bg-image.jpg" alt="" />
        </div>
      </div>
    </div>

    <div className="upper--block my-12 lg:w-2/3 m-auto">
      <div className="lg:flex gap-12 my-5 items-center">
        <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
          <img src="/bg-image.jpg" alt="" />
        </div>
        <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
          <h1 className="font-bold text-gray-600 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis iste</h1> 
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis iste, quo numquam laborum, beatae necessitatibus doloribus tenetur possimus ab saepe? Quam totam deserunt et repellendus quos maiores a consectetur.
        </div>
      </div>
    </div>

    <div className="upper--block my-12 lg:w-2/3 m-auto">
      <div className="lg:flex gap-12 my-5 items-center">
        <div className="w-full lg:w-1/2">
          <h1 className="font-bold text-gray-600 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis iste</h1> 
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis iste, quo numquam laborum, beatae necessitatibus doloribus tenetur possimus ab saepe? Quam totam deserunt et repellendus quos maiores a consectetur.
        </div>
        <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
          <img src="/bg-image.jpg" alt="" />
        </div>
      </div>
    </div>

  </div>

  {/* main body ends here */}
  <hr />

<div className="title text-xl font-bold text-yellow-500 ml-5 lg:ml-12 my-5">NEWS</div>
  <div className="w-full p-1 gap-12 lg:flex px-5 lg:px-12 my-5 lg:my-12">
    <div className="card mt-5 lg:mt-0 border p-7">
      <h1 className="text-xl font-bold text-gray-500 my-3">Article #1</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, unde.</p>
      <br />
      <span className="data text-gray-400 text-sm w-full block">2021-02-03</span>
      <div className="my-2">
      <a href="" className="text-gray-500 text-xs hover:underline">Read more</a> 
</div>
    </div>
    <div className="card mt-5 lg:mt-0 border p-7">
      <h1 className="text-xl font-bold text-gray-500 my-3">Article #1</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, unde.</p>
      <br />
      <span className="data text-gray-400 text-sm w-full block">2021-02-03</span>
      <div className="my-2">
      <a href="" className="text-gray-500 text-xs hover:underline">Read more</a> 
</div>
    </div>
    <div className="card mt-5 lg:mt-0 border p-7">
      <h1 className="text-xl font-bold text-gray-500 my-3">Article #1</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, unde.</p>
      <br />
      <span className="data text-gray-400 text-sm w-full block">2021-02-03</span>
      <div className="my-2">
      <a href="" className="text-gray-500 text-xs hover:underline">Read more</a> 
</div>
    </div>
    <div className="card mt-5 lg:mt-0 border p-7">
      <h1 className="text-xl font-bold text-gray-500 my-3">Article #1</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, unde.</p>
      <br />
      <span className="data text-gray-400 text-sm w-full block">2021-02-03</span>
      <div className="my-2">
      <a href="" className="text-gray-500 text-xs hover:underline">Read more</a> 
</div>
    </div>
  </div>

  {/* footer */}
  <hr />

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
      <div className="flex gap-9">
        <a href="https://twitter.com">{    parse('' + icons.twitter + '')}</a>
        <a href="https://facebook.com">{    parse('' + icons.fb + '')}</a>
        <a href="https://instagram.com">{    parse('' + icons.ig + '')}</a>
      </div>
    </div>
    
    <div className="lg:w-1/3">
      <h1 className="font-bold my-2 text-xl text-yellow-500">Get Our Newsletter</h1>
      <form action="">
      <label htmlFor="">Enter your email address</label>
      <div className="flex items-center">
      <input type="email" name="" id="" className="w-full border form-control px-3 py-2 my-3 focus:outline-none" required/>
      <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 h-1/2 text-white px-3 py-2 focus:outline-none">Subscribe</button>
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
