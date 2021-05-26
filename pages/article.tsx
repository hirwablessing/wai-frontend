import Navbar from '../components/home/navbar'
import Footer from '../components/home/footer'
import {icons} from '../utils/icons'
import parse from 'html-react-parser'
export default function article(){
return(
<div>
    {/* navigation bar */}
    <Navbar />
    {/* main body*/}
    <div className="p-5 lg:p-20">
        <h6 className="text-gray-400 w-full text-center mt-3  text-sm my-5">Published January 13, 2021</h6>
        <h1 className="title font-bold text-3xl text-center">7 Rules of Effective Branding</h1>
        {/* tags */}
        <div className="tags flex gap-4 w-full justify-center my-5 overflow-x-auto px-5">
            <div
                className="bg-gray-100 rounded text-gray-500 text-sm text-center mt-3  p-2 hover:bg-yellow-500 hover:text-white cursor-pointer">
                Branding</div>
            <div
                className="bg-gray-100 rounded text-gray-500 text-sm text-center mt-3  p-2 hover:bg-yellow-500 hover:text-white cursor-pointer">
                Communication</div>
            <div
                className="bg-gray-100 rounded text-gray-500 text-sm text-center mt-3  p-2 hover:bg-yellow-500 hover:text-white cursor-pointer">
                Experience</div>
            <div
                className="bg-gray-100 rounded text-gray-500 text-sm text-center mt-3  p-2 hover:bg-yellow-500 hover:text-white cursor-pointer">
                Identity</div>
            <div
                className="bg-gray-100 rounded text-gray-500 text-sm text-center mt-3  p-2 hover:bg-yellow-500 hover:text-white cursor-pointer">
                Identity</div>
            <div
                className="bg-gray-100 rounded text-gray-500 text-sm text-center mt-3  p-2 hover:bg-yellow-500 hover:text-white cursor-pointer">
                Identity</div>

        </div>
        {/* content */}
        <div className="lg:p-20">

            <div className="sharing--icons flex gap-5 float-right mb-5">
                <h4 className="font-bold">Share</h4>
                <a href="https://instagram.com">{ parse('' + icons.whatsapp + '')}</a>
                <a href="https://twitter.com">{ parse('' + icons.twitter + '')}</a>
                <a href="https://facebook.com">{ parse('' + icons.fb + '')}</a>
                <a href="https://instagram.com">{ parse('' + icons.ig + '')}</a>
            </div>
            <div className="img mb-10">
                <img src="/bg-image.jpg" alt="" className="w-full article--cover-img" />
            </div>
            <div className="content lg:ml-16 flex gap-5">
                <div className="w-full text-justify">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam illo id pariatur qui sint, earum
                        magnam quod recusandae officiis atque adipisci neque delectus vitae eaque doloremque cupiditate
                        veritatis. A, minima?

                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, perferendis maxime. Corporis
                        quae in eaque rerum perspiciatis sed ad minus, pariatur commodi nesciunt sequi, placeat eos
                        architecto. Consectetur, voluptatum aperiam.
                        Laudantium, porro. Quidem placeat ex eos voluptatum dolore! Aliquam voluptas praesentium earum
                        blanditiis dignissimos repellat nihil tempore beatae. Ab sapiente officia asperiores obcaecati,
                        tempore facilis perferendis molestiae. Unde, quaerat facere?
                        <br />
                        Nobis nostrum expedita suscipit voluptatum! At vel sint sit nesciunt quo, minus veniam earum
                        aspernatur quas qui voluptatum impedit quae tempore dolorum incidunt, atque inventore nihil quia
                        eaque. Voluptas, dolores!
                        Vitae harum omnis minima praesentium facere tempore sequi corporis consectetur? Ut, architecto.
                        Sit, officiis ducimus corrupti, officia quas doloribus quisquam tempora, error incidunt repellat
                        neque natus quos debitis magni atque.
                        <br />
                        <br />
                        Nostrum animi hic sequi esse aperiam possimus nihil aut rerum autem accusantium! Corporis
                        ducimus, consequatur, iste possimus, nobis fugiat soluta incidunt similique ipsam temporibus at
                        molestiae eos eaque reprehenderit cumque.
                        <br />
                        Porro assumenda in, temporibus repellat tenetur consectetur aspernatur accusantium! Voluptatum,
                        necessitatibus temporibus dolorem ipsa harum libero facere itaque, ad ipsam explicabo saepe
                        similique impedit repellendus mollitia earum cumque ut ipsum.
                        Aut mollitia error, quia dolore quasi quam est dolorem porro odit atque vel sint perspiciatis
                        adipisci cupiditate ratione nobis, numquam aperiam neque illum, doloremque placeat aspernatur
                        accusantium tempore suscipit. Ratione.
                        Fugiat corporis nostrum repellendus, voluptatibus cum vitae perspiciatis mollitia delectus, ut
                        nisi inventore maxime sed tempora animi doloremque nihil? Beatae ex facere itaque similique
                        repudiandae aspernatur quis tempore nulla est?
                        <br />
                        <br />
                        Accusamus iusto reiciendis officiis necessitatibus, aliquid cumque facere ducimus sequi,
                        sapiente vero sed minus, pariatur ex quasi voluptatum eaque. Necessitatibus itaque maiores aut
                        alias nihil quidem dicta voluptate incidunt minus!
                        <br />
                        <br />
                        Similique distinctio praesentium, sed, harum voluptatem animi, neque blanditiis voluptatum
                        itaque odit iure porro architecto molestias quam id rem vitae nesciunt. Quo alias voluptatibus
                        error eum illo pariatur expedita harum.
                    </p>
                    <div className="author my-5 flex gap-3 text-gray-500 my-12">
                        <h4 className="names font-bold">Author: </h4> <span>Aime Ismael</span>
                    </div>
                    <div className="sharing--icons flex gap-5 float-right mb-5">
                <h4 className="font-bold">Share</h4>
                <a href="https://instagram.com">{ parse('' + icons.whatsapp + '')}</a>
                <a href="https://twitter.com">{ parse('' + icons.twitter + '')}</a>
                <a href="https://facebook.com">{ parse('' + icons.fb + '')}</a>
                <a href="https://instagram.com">{ parse('' + icons.ig + '')}</a>
            </div>
                </div>

            </div>

        </div>
    </div>
    {/* main body ends here */}
    {/* footer */}
    <hr className="hidden lg:block" />
    <Footer />

</div>
)
}