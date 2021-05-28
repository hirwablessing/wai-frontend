import Navbar from '../components/home/navbar'
import Footer from '../components/home/footer'
import News from '../components/home/news'
import React from 'react'
import Link from 'next/link'
export default function Home() {
return (

<div>
  {/* navigation bar */}
  <Navbar />

  {/* main body image */}
  <div className="bg--img-block py-12">
    <div className="text-white  lg:w-1/2 mt-16 lg:px-12">
      <h1 className="ml-2" style={{fontSize:'35px'}}>WORLD AMENDERS INTERNATIONAL</h1>
      <p className="ml-2 text-xl my-3">"We are a young, but strong, voice for the unheard."</p>

<Link href="/takeaction"><a  className="mx-2 block text-center lg:w-1/2 btn bg-yellow-500 hover:bg-yellow-600 text-white rounded p-4 text-sm my-12">Take
        an action and become an Amender </a></Link>
   

    </div>
  </div>
  {/* main body content */}
  <div className="px-5 py-20 lg:px-20">
    <div className="upper--block my-15 w-full">
      <div className="title text-yellow-500 font-bold text-xl text-center"> OUR MISSION </div>
      <div className="mission--title text-center my-12 lg:px-20">
        Commissioned by Christ, wherever we go, we strive to better the lives of the neediest and encourage young people
        to use their powerful energy, fearless spirit, and creative minds in launching humanitarian actions and advocacy
        to make hunger, poverty, and injustice unknown to the next generations.

      </div>

      <div className="title text-yellow-500 font-bold text-xl text-center"> WAI </div>
      <div className="lg:flex gap-12 my-12 items-center lg:px-20">
        <div className="w-full lg:w-1/2">
          <h1 className="font-bold text-lg">
            Opening verse</h1>
          <br />
          <p className="text-gray-500">
          Whoever oppresses the poor insults their Maker, but those who are generous to the needy honors Him (14: 31)
          </p>
        </div>
        <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
          <img src="/bg-image.jpg" alt="" />
        </div>
      </div>
    </div>

    <div className="upper--block my-15 w-full">
      <div className="lg:flex gap-12 my-12 items-center lg:px-20">
        <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
          <img src="/bg-image.jpg" alt="" />
        </div>
        <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
          <h1 className="font-bold text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis iste</h1>
          <br />
          <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis iste, quo numquam laborum, beatae
          necessitatibus doloribus tenetur possimus ab saepe? Quam totam deserunt et repellendus quos maiores a
          consectetur.
          </p>
        </div>
      </div>
    </div>

    <div className="upper--block my-15 w-full">
      <div className="lg:flex gap-12 my-12 items-center lg:px-20">
        <div className="w-full lg:w-1/2">
          <h1 className="font-bold text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis iste</h1>
          <br />
          <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis iste, quo numquam laborum, beatae
          necessitatibus doloribus tenetur possimus ab saepe? Quam totam deserunt et repellendus quos maiores a
          consectetur.
          </p>
        </div>
        <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
          <img src="/bg-image.jpg" alt="" />
        </div>
      </div>
    </div>

  </div>

  {/* main body ends here */}
  <hr />
  {/* new articles */}
  <News title={'News'} />
  {/* footer */}
  <hr />
  <Footer />

</div>
)
}
