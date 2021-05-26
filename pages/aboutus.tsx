import Navbar from '../components/home/navbar'
import Footer from '../components/home/footer'
import News from '../components/home/news'
export default function aboutus(){
return (

<div>
    {/* navigation bar */}
    <Navbar />
    {/* main body content */}
    <div className="p-5 lg:p-20 w-full">
        <div className="mission bg-yellow-50 text-dark p-5 rounded-lg">
            <h2 className="text-center text-yellow-500 text-2xl font-bold w-full my-5">Mission</h2>
            <p className="lg:px-20">Commissioned by Christ, wherever we go, we strive to better the lives of the neediest
                and encourage young people to use their powerful energy, fearless spirit, and creative minds in
                launching humanitarian actions to make hunger, poverty, and injustice unknown to the next generations.
            </p>
        </div>

        <div className="story my-12">
            <h2 className="text-center text-2xl text-yellow-500 font-bold w-full my-10">Our story</h2>
            <div className="lg:flex gap-12">
                <div className="w-full lg:w-1/2 my-5 lg:my-0">
                <img src="/world.png" alt="" className="rounded-md" />
                    {/* <div className="flex gap-5 w-full">
                        <div className="bg-yellow-50 w-1/3 h-1/2 p-10 lg:p-20"></div>
                        <div className="bg-yellow-50 w-1/3 h-1/2 p-5 lg:p-10"></div>
                        <div className="bg-yellow-50 w-1/3 h-1/2 p-10 lg:p-20"></div>
                    </div>
                    <div className="flex gap-5 w-full mt-5">
                        <div className="bg-yellow-50 w-1/3 h-1/2 p-5 lg:p-10"></div>
                        <div className="bg-yellow-50 w-1/3 h-1/2 p-10 lg:p-20"></div>
                        <div className="bg-yellow-50 w-1/3 h-1/2 p-5 lg:p-10"></div>
                    </div>
                    <div className="flex gap-5 w-full mt-5">
                        <div className="bg-yellow-50 w-1/3 h-1/2 p-5 lg:p-20"></div>
                        <div className="bg-yellow-50 w-1/3 h-1/2 p-10 lg:p-10"></div>
                        <div className="bg-yellow-50 w-1/3 h-1/2 p-5 lg:p-20"></div>
                    </div>
                    <div className="flex gap-5 w-full mt-5">
                        <div className="bg-yellow-50 w-1/3 h-1/2 p-10 lg:p-10"></div>
                        <div className="bg-yellow-50 w-1/3 h-1/2 p-5 lg:p-20"></div>
                        <div className="bg-yellow-50 w-1/3 h-1/2 p-10 lg:p-10"></div>
                    </div> */}
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
                    <p className="font-bold my-5 text-justify">“Regardless of financial status, educational level, religious belief, or political position -- everyone who can, at least for one second, see or hear about the heartbreaking life stories of the neediest people across the globe cannot leave their lives unamended. That is what happened to me after reading “Challenging The Face of Hunger By Tony Hall.” I could not hold myself until I thought of founding World Amenders International  - Aime Ismael.”</p>

                    <div className="w-full flex gap-12 items-center justify-center">
                        <div className="w-1/2">
                    {/* <img src="/bg-image.jpg" alt="" className="rounded-md" /> */}
                    </div>
                    <div className="text-center">
                    <h1 className="">Aime Ismael</h1>
                    <span className="title text-gray-400 text-xs">Founder and President of World Amenders International</span>
                    </div>
                    </div>
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