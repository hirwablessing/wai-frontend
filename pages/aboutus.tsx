import Navbar from '../components/home/navbar'
import Footer from '../components/home/footer'
export default function aboutus(){
return (

<div>
    {/* navigation bar */}
    <Navbar />
    {/* main body content */}
    <div className="p-5 lg:p-20 w-full">
        <div className="mission bg-blue-50 text-dark p-10 rounded-lg">
            <h2 className="text-blue-700 text-center text-3xl font-bold w-full mb-5">Mission</h2>
            <p className="">Commissioned by Christ, wherever we go, we strive to better the lives of the
                neediest
                and encourage young people to use their powerful energy, fearless spirit, and creative minds in
                launching humanitarian actions to make hunger, poverty, and injustice unknown to the next generations.
            </p>
        </div>

        <div className="story my-12">
            <h2 className="text-3xl text-blue-700 font-bold w-full my-10">Our story</h2>
            <div className="lg:flex gap-12">
                <div className="w-full lg:w-1/2 my-5 lg:my-0">
                    <img src="/world.png" alt="" className="rounded-md" />

                </div>

                <div className="w-full lg:w-1/2">
                    <p className="text-gray-600 text-justify">
                        In 2021, after reading the book of Challenging the Face of Hunger by Tony Hall, a book that
                        sheds light on the heartbreaking lives stories of the hungry people across the globe, Aime
                        Ismael heard a voice from God, urging him to go and amend the lives of the neediest.
                        Reading Challenging the face of Hunger was a spark to Aime Ismael’s long-life humanitarian
                        actions. In High school, when he was the school head boy and the pastor of Protestant Group, he
                        founded the Agape program, a program aimed to help the neediest students and make them feel at
                        home. His time as the school head boy was a voice to the most vulnerable students. <br /> Upon
                        finishing high school, he joined a church Unity Club, which collected hygienic material for the
                        sick in hospitals and visited prisoners. Aime Ismael’s unending determination and stimulating
                        intellectual capacity made him admitted to Bridge2Rwanda, a pre-college preparatory program that
                        helped him earn a full scholarship to Texas Christian University. After seeing all the
                        unbelievable blessings God was giving him, Aime Ismael prayed hard, asking God why chose him and
                        not others. Until he read “Challenging the Face of Hunger,” did he hear the answer from God that
                        “I gave you the most to help the least of these. Go and amend the world.” Straight away, Aime
                        Ismael got the ideas of World Amenders International and started to find partners and friends to
                        help him launch very small humanitarian actions in their village.

                    </p>
                    <p className="font-bold my-5 text-justify">“Regardless of financial status, educational level,
                        religious belief, or political position -- everyone who can, at least for one second, see or
                        hear about the heartbreaking life stories of the neediest people across the globe cannot leave
                        their lives unamended. That is what happened to me after reading “Challenging The Face of Hunger
                        By Tony Hall.” I could not hold myself until I thought of founding World Amenders International
                        - Aime Ismael.”</p>

                    <div className="w-full flex gap-12 items-center justify-center">
                        <div className="w-1/2">
                            {/* <img src="/bg-image.jpg" alt="" className="rounded-md" /> */}
                        </div>
                        <div className="text-center">
                            <h1 className="">Aime Ismael</h1>
                            <span className="title text-gray-400 text-xs">Founder and President of World Amenders
                                International</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* our story ends here */}

        {/* how we work */}
        <div className="my-10">
            <h2 className="text-3xl text-blue-700 font-bold w-full my-10">How we work</h2>
            <div className="absolute">
                <div className="flex gap-5 w-full">
                    <div className="shadow-lg w-1/3 h-1/2 p-10 lg:p-20"></div>
                    <div className="shadow-lg w-1/3 h-1/2 p-5 lg:p-10"></div>
                    <div className="shadow-lg w-1/3 h-1/2 p-10 lg:p-20"></div>
                </div>
                <div className="flex gap-5 w-full mt-5">
                    <div className="shadow-lg w-1/3 h-1/2 p-5 lg:p-10"></div>
                    <div className="shadow-lg w-1/3 h-1/2 p-10 lg:p-20"></div>
                    <div className="shadow-lg w-1/3 h-1/2 p-5 lg:p-10"></div>
                </div>
                <div className="flex gap-5 w-full mt-5">
                    <div className="shadow-lg w-1/3 h-1/2 p-5 lg:p-20"></div>
                    <div className="shadow-lg w-1/3 h-1/2 p-10 lg:p-10"></div>
                    <div className="shadow-lg w-1/3 h-1/2 p-5 lg:p-20"></div>
                </div>
            </div>
            <div className="lg:flex gap-12">
                <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
                    <img src="/how_we_work.png" alt="" className="rounded-md" />
                </div>
                <div className="mt-12 lg:mt-0 lg:w-1/2 py-10 lg:py-0">
                    <p className="text-justify text-gray-600">
                        Commissioned by Christ, wherever we go, we strive to better the lives of the neediest and
                        encourage young people to use their powerful energy, fearless spirit, and creative minds in
                        humanitarian actions to make injustice, hunger, and poverty unknown to the next generations.
                        <br />

                        We, Amenders, don’t primarily aim to do big humanitarian actions. We amend small problems, which
                        stray people from their god-given abundant happiness. At home, at college, at work, or anywhere
                        else, we strive to make people feel cared for, understood, belonged, and, of course, loved by
                        God. <br /> Some problems can have strong gravity in that they require the collaborative effort
                        of all Amenders across the globe to advocate, launch strong fundraising campaigns, or initiate
                        long-lasting programs like schools or centers. At any cost, we never fear facing such gigantic
                        problems because we are strong under God. <br /> Every year, we hold a meeting in Kigali to
                        check our progress, set personal and team goals, and go back to amend the world where we live.

                    </p>
                </div>
            </div>

        </div>

        {/* our team */}
        <div className="mt-12 pt-12">
            <div className=" bg-blue-50 p-5 lg:p-10">
                <h2 className="text-3xl text-blue-700 font-bold w-full my-10">Our team</h2>

                <div className="lg:flex gap-4 w-full justify-center my-5 overflow-x-auto">

                    <div className="card bg-white lg:w-1/4 min-h-60">
                        <img src="/bg-image.jpg" className="h-60" alt="" />
                        <div className="block -center my-5 p-5">
                            <h1 className="text-md">Aime Ismael</h1>
                            <span className="text-sm text-gray-500">Founder and President of World Amenders
                                International</span>
                        </div>
                    </div>

                    <div className="card bg-white lg:w-1/4 min-h-60">
                        <img src="/bg-image.jpg" className="h-60" alt="" />
                        <div className="block -center my-5 p-5">
                            <h1 className="text-md">Aime Ismael</h1>
                            <span className="text-sm text-gray-500">Founder and President of World Amenders
                                International</span>
                        </div>
                    </div>

                    <div className="card bg-white lg:w-1/4 min-h-60">
                        <img src="/bg-image.jpg" className="h-60" alt="" />
                        <div className="block -center my-5 p-5">
                            <h1 className="text-md">Aime Ismael</h1>
                            <span className="text-sm text-gray-500">Founder and President of World Amenders
                                International</span>
                        </div>
                    </div>

                    <div className="card bg-white lg:w-1/4 min-h-60">
                        <img src="/bg-image.jpg" className="h-60" alt="" />
                        <div className="block -center my-5 p-5">
                            <h1 className="text-md">Aime Ismael</h1>
                            <span className="text-sm text-gray-500">Founder and President of World Amenders
                                International</span>
                        </div>
                    </div>
                </div>
                <div className="mt-12 lg:flex gap-4 w-full justify-center my-5 overflow-x-auto">
                   
                <div className="card bg-white lg:w-1/4 min-h-60">
                        <img src="/bg-image.jpg" className="h-60" alt="" />
                        <div className="block -center my-5 p-5">
                            <h1 className="text-md">Aime Ismael</h1>
                            <span className="text-sm text-gray-500">Founder and President of World Amenders
                                International</span>
                        </div>
                    </div>

                    <div className="card bg-white lg:w-1/4 min-h-60">
                        <img src="/bg-image.jpg" className="h-60" alt="" />
                        <div className="block -center my-5 p-5">
                            <h1 className="text-md">Aime Ismael</h1>
                            <span className="text-sm text-gray-500">Founder and President of World Amenders
                                International</span>
                        </div>
                    </div>

                    <div className="card bg-white lg:w-1/4 min-h-60">
                        <img src="/bg-image.jpg" className="h-60" alt="" />
                        <div className="block -center my-5 p-5">
                            <h1 className="text-md">Aime Ismael</h1>
                            <span className="text-sm text-gray-500">Founder and President of World Amenders
                                International</span>
                        </div>
                    </div>

                    <div className="card bg-white lg:w-1/4 min-h-60">
                        <img src="/bg-image.jpg" className="h-60" alt="" />
                        <div className="block -center my-5 p-5">
                            <h1 className="text-md">Aime Ismael</h1>
                            <span className="text-sm text-gray-500">Founder and President of World Amenders
                                International</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>

        {/* our location */}
        <div className="mt-12 pt-12">
            <div className="lg:flex gap-12 mt-12">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl text-blue-700 font-bold w-full my-10">Our Location</h2>
                    <p className="text-gray-600">
                        We work from any place that has the most vulnerable person/people. We believe that the most
                        unheard and the most sick aren’t in offices; however, they are crying next to our workrooms, our
                        houses, our dorms, hospitals, or in your neighborhood. <br /> Every year, we hold a meeting in
                        Kigali to check our progress, set personal and team goals, and go back to amend the world where
                        we live.

                    </p>
                </div>
                <div className="lg:w-1/2 border p-2 my-10 lg:my-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50274.68177558104!2d30.094723093317853!3d-1.9233386718099916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali!5e0!3m2!1sen!2srw!4v1622105810969!5m2!1sen!2srw"
                        className="w-full h-96" loading="lazy"></iframe>
                </div>


            </div>
        </div>
    </div>

    {/* main body ends here */}
    {/* footer */}
    <hr />
    <Footer />

</div>
)
}