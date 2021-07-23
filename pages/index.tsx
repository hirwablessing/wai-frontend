import Navbar from '../components/home/navbar'
import Footer from '../components/home/footer'
import News from '../components/home/news'
import React from 'react'
import Link from 'next/link'
export default function Home() {
  return (

    <div>

      <div className="top-0 gradient">
        {/* navigation bar */}
        <Navbar
          textColor="text-white"
          bgColor="transparent"
          activeColor="text-blue-500"
          hoverColor="text-blue-500"

        />

        {/* main body image */}


        {/* <div className="text-white  lg:w-1/2 mt-10 lg:mt-0 px-10 lg:px-12 mx-auto">
    <div className="">
      <h1 className="ml-2 text-4xl">WORLD AMENDERS INTERNATIONAL</h1>
      <p className="ml-2 text-xl my-3">"We are a young, but strong, voice for the unheard."</p>
      </div>
      <div className="lg:w-1/2">

      <Link href="/takeaction"><a
        className="block lg:ml-4 w-full text-center btn bg-blue-700 hover:bg-blue-600 text-white rounded py-4 text-sm ">
        Become an Amender </a></Link>
        </div>



    </div> */}

        <div className="md:absolute w-full flex top-40 justify-end">
          <div className="md:w-2/3 h-full bg-black-gradient text-white p-5 md:p-10 md:rounded-lg main--dashboard md:mr-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-5">
              <div>
                <h1 className="text-3xl block font-bold">World Amenders International (WAI)
                </h1>
                <br />
                <span className="text-md block">Commissioned by Christ, wherever we go, we strive to better the lives of the neediest and encourage young people to use their powerful energy, fearless spirit, and creative minds in launching humanitarian actions and advocacy to make hunger, poverty, and injustice unknown to the next generations.</span>
                <button className="sm:w-full md:w-1/2 mt-10 bg-blue-600 text-white py-2 px-10 rounded-full hover:bg-black hover:text-white btn-border-1 cursor-pointer focus:outline-none">Take action</button>

              </div>
              <div className="">
                <img src="/person.svg" alt="" />
              </div>
            </div>



          </div>
        </div>

        <video src="/amenders_home.mp4" autoPlay loop muted className="w-full main--video top-0 absolute " ></video>
      </div>
         {/* navigation bar */}
         <Navbar
           textColor="text-white"
           bgColor="bg-blue-gradient"
           activeColor="text-blue-500"
           hoverColor="text-blue-500"

        />
      {/* main body content */}
      <div className="px-5 py-20 lg:px-20 top-20 md:top-0">
        <div className="upper--block my-15 w-full rounded-3xl lg:p-10  ">
          <div className="title text-blue-700 font-bold text-2xl text-center">🌏 OUR MISSION </div>
          <div className="mission--title lg:px-20 text-gray-600 text-sm my-5">
            Commissioned by Christ, wherever we go, we strive to better the lives of the neediest and encourage young people
            to use their powerful energy, fearless spirit, and creative minds in launching humanitarian actions and advocacy
            to make hunger, poverty, and injustice unknown to the next generations.

          </div>

        </div>
        <section className="lg:flex items-center gap-12  lg:px-20">
          <div className="w-full lg:w-1/2">
            <h1 className="font-bold text-lg">
              Opening verse</h1>
            <br />
            <p className="text-sm text-gray-600 mb-3">
              Whoever oppresses the poor insults their Maker, but those who are generous to the needy honors Him (14: 31)
            </p>
          </div>
          <div className="w-full lg:w-1/2 lg:mt-0">
            <img src="/readingBible.jpg" alt="" />
          </div>
        </section>


        <section className="upper--block my-15 w-full lg:py-20">
          <div className="lg:flex gap-12  items-center lg:px-20">
            <div className="w-full lg:w-1/2 lg:mt-0">
              <img src="/donation.jpg" alt="" />
            </div>
            <div className="w-full lg:w-1/2 lg:mt-0">
              <h1 className="font-bold text-lg text-blue-700 my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis iste</h1>
              <br />
              <p className="text-sm text-gray-500 mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis iste, quo numquam laborum,
                beatae
                necessitatibus doloribus tenetur possimus ab saepe? Quam totam deserunt et repellendus quos maiores a
                consectetur.
              </p>
            </div>
          </div>
        </section>

        <section className="upper--block my-15 w-full lg:py-20">
          <div className="lg:flex gap-12  items-center lg:px-20">
            <div className="w-full lg:w-1/2">
              <h1 className="font-bold text-lg text-blue-700 my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis iste</h1>
              <br />
              <p className="text-sm text-gray-500 mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis iste, quo numquam laborum,
                beatae
                necessitatibus doloribus tenetur possimus ab saepe? Quam totam deserunt et repellendus quos maiores a
                consectetur.
              </p>
            </div>
            <div className="w-full lg:w-1/2 lg:mt-0">
              <img src="/charity.jpg" alt="" />
            </div>
          </div>
        </section>

      </div>

      {/* main body ends here */}
      {/* new articles */}

      {/* video */}
      <section className="bg-black p-5 md:p-10 lg:p-20 w-full mb-5 bg-black-gradient my-5">
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          <div>
          <h1 className="text-3xl text-blue-700 font-bold">WAI actions overview</h1>

          <p className="text-white my-5">
            <h1>We are devoted to make</h1> <br />
            <ul className="my-3 ml-5">
              <li className="list-disc">Poverty</li>
              <li className="list-disc">Hunger</li>
              <li className="list-disc">Injustice</li>
            </ul>
            unknown to the next generations.
          </p>

          <img src="/people.svg" alt="" className="w-1/2" />

          </div>
          <div className="w-full">
          <video src="/amenders_home.mp4" autoPlay loop muted controls className="my-5" ></video>

          </div>
        </div>
      </section>
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
