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
  <div className="bg--img-block h-screen lg:flex items-center">
    <div className="lg:w-1/2 lg:px-5">
      <img src="/bgImage.svg" alt="" className="w-full"/>
    </div>
    <div className="text-white  lg:w-1/2 mt-10 lg:mt-0 px-10 lg:px-12 mx-auto">
    <div className="">
      <h1 className="ml-2" style={{fontSize:'35px'}}>WORLD AMENDERS INTERNATIONAL</h1>
      <p className="ml-2 text-xl my-3">"We are a young, but strong, voice for the unheard."</p>
      </div>
      <div className="lg:w-1/2">

      <Link href="/takeaction"><a
        className="block lg:ml-4 w-full text-center btn bg-blue-700 hover:bg-blue-600 text-white rounded py-4 text-sm my-12">
        Become an Amender </a></Link>
        </div>


    </div>
  </div>
  {/* main body content */}
  <div className="px-5 py-20 lg:px-20">
    <div className="upper--block my-15 w-full bg-blue-50 rounded-3xl p-5 lg:p-10">
      <div className="title text-blue-700 font-bold text-2xl text-center"> OUR MISSION </div>
      <div className="mission--title text-center my-12 lg:px-20 text-gray-600">
        Commissioned by Christ, wherever we go, we strive to better the lives of the neediest and encourage young people
        to use their powerful energy, fearless spirit, and creative minds in launching humanitarian actions and advocacy
        to make hunger, poverty, and injustice unknown to the next generations.

      </div>

      <div className="title text-blue-700 font-bold text-2xl lg:px-20 lg:pt-20"> World Amenders International (WAI)
      </div>
      <div className="lg:flex gap-12 my-12 lg:px-20">
        <div className="w-full lg:w-1/2">
          <h1 className="font-bold text-lg">
            Opening verse</h1>
          <br />
          <p className="text-sm text-gray-600">
            Whoever oppresses the poor insults their Maker, but those who are generous to the needy honors Him (14: 31)
          </p>
        </div>
        <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
          <img src="/readingBible.jpg" alt="" />
        </div>
      </div>
    </div>

    <div className="upper--block my-15 w-full">
      <div className="lg:flex gap-12 my-12 items-center lg:px-20">
        <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
          <img src="/donation.jpg" alt="" />
        </div>
        <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
          <h1 className="font-bold text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis iste</h1>
          <br />
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis iste, quo numquam laborum,
            beatae
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
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis iste, quo numquam laborum,
            beatae
            necessitatibus doloribus tenetur possimus ab saepe? Quam totam deserunt et repellendus quos maiores a
            consectetur.
          </p>
        </div>
        <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
          <img src="/charity.jpg" alt="" />
        </div>
      </div>
    </div>

  </div>

  {/* main body ends here */}
  <hr />
  {/* new articles */}
  <div className="lg:px-20">
  <News title={'News'} />
  <News />
  <News />
  </div>
  {/* footer */}
  <hr />
  <Footer />

</div>
)
}
