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
    
    {/* <Image src="/bg-image.jpg" height="400px" width="200" alt="" className="w-full object-cover"  /> */}
  </div>

  <div className="">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestias, porro sed quia saepe cumque modi iste
    delectus deserunt libero quibusdam commodi sunt velit officiis aut. Consectetur autem natus corrupti.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem accusantium maiores, consectetur esse, perferendis
    ea distinctio labore provident officia expedita ducimus dignissimos voluptatum, ad veniam modi non illum optio id.
    Facilis eius eos asperiores esse assumenda, tempora cum repudiandae voluptas dolore exercitationem omnis vitae?
    Voluptatem modi rem quisquam id ipsam consectetur nam, iure quam itaque eius fugiat, aspernatur doloremque ipsa!
    In earum exercitationem sequi necessitatibus reprehenderit voluptas? Delectus cumque ex, adipisci eaque eligendi
    eveniet harum odit. Doloremque, odit! Assumenda placeat nostrum veniam aperiam eligendi quia aliquid esse
    reiciendis, odit maiores?
    Alias obcaecati expedita deserunt, quia voluptas numquam debitis sint facere rerum. Laudantium pariatur dolore sunt
    similique quaerat nisi ea a, tempore voluptatum illum modi dicta eveniet? Dicta a cupiditate nisi!
    Vitae ratione nihil suscipit magnam! Eveniet exercitationem quis, alias tenetur perspiciatis ipsum soluta accusamus
    perferendis. Veniam quis nam est optio commodi itaque aperiam, quaerat voluptatibus, asperiores iusto odio?
    Molestias, beatae.
    Cupiditate consequuntur iure, ipsum ducimus accusantium vero cumque commodi culpa voluptatibus, eos rerum assumenda,
    recusandae id accusamus nulla amet maiores saepe? Corrupti praesentium maxime eligendi autem voluptates. Distinctio,
    voluptatum optio?
    Provident nostrum reprehenderit cumque quasi nisi dolorum consequuntur, ea, recusandae similique a quis quaerat eos
    voluptatibus deleniti voluptate iste vel aliquid modi repellat doloremque eum corrupti facere vero suscipit. Cum.
    Quae sunt deserunt, temporibus numquam saepe similique quidem error animi, at autem alias facere esse consequatur
    itaque, ducimus rerum! Ullam a ut vitae corrupti, non consectetur suscipit enim. Voluptatem, et.
    Hic laudantium consectetur animi culpa ducimus cum quis eum rem molestiae quisquam pariatur, earum similique
    expedita ratione qui tempore non assumenda vel. Corporis aperiam at velit, cum consequuntur illum debitis!
    Beatae quod consectetur facere. Voluptate temporibus quaerat cum ipsa aperiam? Doloribus mollitia atque nobis dolor
    perspiciatis minima maxime culpa aut, at corporis sapiente ipsa minus vitae quis maiores. Accusantium, asperiores.
    Delectus voluptates quas cupiditate atque, incidunt odio? Consectetur id, quos deserunt aperiam porro expedita odit
    libero repellat, laudantium saepe alias distinctio. Sit numquam autem sed tempore perspiciatis error. Ullam,
    distinctio.
    Tempore sint, at esse, est modi incidunt aspernatur libero perspiciatis unde sit maiores iste, voluptatibus eius
    quam ipsum vel placeat itaque. Excepturi ad dolores provident omnis saepe unde praesentium perferendis.
    Omnis assumenda voluptate iusto delectus. Ducimus recusandae adipisci error quia dolore, explicabo eos rem minus
    excepturi, earum consectetur voluptates asperiores molestiae alias dolor nam eligendi distinctio reprehenderit sunt
    laborum aliquam!
    Eveniet sint temporibus harum et adipisci dolorem enim aperiam, nobis iste deleniti accusantium eum, vel repellendus
    nostrum deserunt beatae delectus, quasi libero. Fuga repudiandae unde minus. Quisquam, nam fuga. Illum?
    Eius fugit qui necessitatibus itaque recusandae nulla illum, cupiditate iure rerum ullam aliquam provident ad libero
    quae ea aperiam obcaecati rem assumenda doloribus cumque sapiente reiciendis eos porro corrupti. Vero.
    Incidunt fuga fugit qui cupiditate eaque laborum debitis dolore ad numquam aliquam modi sed, veniam repudiandae quia
    a? Accusantium repellat eos, laborum provident culpa rerum vero veniam voluptatibus natus cum.
    Similique eligendi sint accusantium ducimus rerum laboriosam quos sed. Cumque distinctio a impedit ut animi dolor
    eveniet. Amet, voluptatem dolorem reiciendis numquam dolor officia quia aperiam impedit, porro officiis a.
    Et odio maxime repudiandae expedita, voluptatibus vitae. Asperiores soluta, nisi dolore sunt adipisci vitae cumque
    corporis repudiandae praesentium quia dicta placeat ducimus. Animi, possimus voluptas magnam sed nemo iure.
    Mollitia.
    Odit eos nemo quam soluta, dignissimos tempore iusto aliquam, dolores reiciendis corrupti voluptatibus tenetur vel
    vitae in nesciunt, eius veniam minus quos delectus rem praesentium temporibus eveniet laboriosam ipsam! Itaque.
    Laborum vero, iure sint expedita perferendis tenetur, in labore fugit ullam quasi eveniet error ipsum quia harum aut
    animi quas voluptatibus nisi ratione mollitia porro, earum sit. Iste, eligendi unde.
    Magnam quaerat aperiam vero, fuga dolores, rem aspernatur magni culpa, rerum nemo veniam ad officia facilis possimus
    alias maxime tenetur nisi commodi velit molestias. Obcaecati sed excepturi amet neque aspernatur?
    Magnam non quasi accusamus reiciendis aspernatur quas minus, tenetur, itaque optio facilis ratione error nihil vel
    placeat, aperiam sint corrupti illo atque quis aliquam esse nostrum molestias? Cum, ullam ipsa!
    Ut esse omnis similique impedit ex eius saepe libero voluptatem vel ratione. Reprehenderit in odio corrupti enim
    ducimus ut sapiente porro aut! Harum ut amet pariatur iure, obcaecati provident aperiam?
    Perferendis enim exercitationem minus modi dolorem aliquam itaque deserunt adipisci soluta rerum. Vero harum eos
    fuga iste officiis quam doloremque velit voluptate, vel porro voluptatem repellendus sunt omnis dolores neque!
    Consequuntur accusantium esse nemo similique praesentium suscipit natus porro dolores voluptatibus mollitia impedit
    aut officiis est harum veritatis beatae quisquam nesciunt laudantium, sequi voluptatem enim? Nostrum quos error
    laudantium omnis.
    Magnam distinctio, asperiores nam, ex sequi necessitatibus consequatur reiciendis quam consectetur aspernatur vitae!
    Vitae pariatur expedita, necessitatibus itaque tempora quaerat eos dolore architecto non deleniti optio ut vero
    quisquam laborum?
    Perspiciatis eos nobis aperiam sint natus soluta error? Nulla, dolores. Voluptates non impedit magnam cupiditate
    quas ea quisquam magni nisi neque, suscipit ab odio excepturi id maxime optio hic atque!
    Voluptas, minima ad obcaecati alias harum, dolorem perferendis eveniet doloribus fugiat molestiae repudiandae
    debitis? Unde optio impedit repudiandae mollitia illum, consequuntur cupiditate molestiae soluta maxime vitae
    voluptas eveniet, numquam facilis.
    Dolore hic maiores optio tempora debitis minima animi officia dolores. Possimus laudantium animi assumenda, amet
    voluptas quaerat nam magni, aliquid quibusdam reprehenderit nisi blanditiis voluptates, at tempora saepe. Quaerat,
    aliquid.
    Reiciendis sequi corrupti odio quaerat repellat ad distinctio obcaecati optio tenetur necessitatibus possimus
    impedit corporis maiores excepturi, maxime libero nobis velit veritatis non, eos molestias autem sed alias
    consequuntur? Nisi.
    Ipsam a aperiam natus odio commodi iusto provident, tenetur possimus incidunt explicabo reprehenderit expedita
    officia dolor minima ducimus sapiente illo quis neque sequi. Dolorem cupiditate laborum esse quos! At, praesentium.
    Ipsam earum vel aut animi dolore nobis maiores enim iusto ratione aliquam! Delectus dolorum recusandae, fugiat
    tenetur deleniti dolore fugit nisi minus aperiam ipsum repellat. Repudiandae cum eaque voluptatem mollitia?
    Pariatur aliquam assumenda, illum sunt officia voluptatem provident reprehenderit similique accusantium eligendi
    expedita earum totam, atque corporis eum est repellendus officiis labore voluptate impedit dolorem nisi ipsa. Illum,
    ipsam dolores?
    Asperiores aut iusto rem, sit nesciunt optio maiores iure officia consequatur ea atque itaque repellendus iste,
    earum ipsum harum consectetur natus similique quidem odio facilis ab accusamus? In, impedit similique.
    Accusamus fuga enim, quidem ea autem error et similique repudiandae pariatur provident ipsam culpa beatae sapiente
    voluptatum consectetur tempora ex voluptatem exercitationem. Consectetur porro hic libero officiis. Facilis, maxime
    distinctio!
    Quasi temporibus consequuntur consectetur, numquam dicta reiciendis quos in assumenda error laudantium repellat rem,
    molestiae tenetur quisquam delectus voluptatum voluptates eaque fuga architecto inventore officia voluptatem
    officiis quibusdam. Consequuntur, et!
    Expedita provident, reprehenderit quam ratione neque impedit perspiciatis quo quos dolorem nam cupiditate corrupti
    quisquam blanditiis repellendus soluta voluptatum nisi nesciunt ea laborum modi suscipit animi mollitia inventore?
    Dolor, adipisci?
    Nisi sapiente a ex laborum quisquam fugit iure soluta ullam eaque quaerat autem veritatis quo inventore officiis
    dolorem, cupiditate, quibusdam vel magnam praesentium nesciunt consectetur dignissimos at deserunt delectus?
    Tempore.
    Tempora recusandae voluptate maxime repellat magni fuga laboriosam voluptates obcaecati, debitis tempore
    praesentium, ea soluta quas cumque harum? Voluptatum neque fugit recusandae exercitationem nihil non vero commodi at
    voluptates sed.
    Quasi, est tenetur distinctio deleniti dignissimos id, in sit minima, consequatur modi ipsa numquam reiciendis quis
    eveniet dolores aliquid quos delectus optio laudantium tempora velit molestias iste pariatur. Deserunt, sapiente!
    Hic nostrum perferendis voluptatum, voluptate id natus at, delectus nisi error amet corrupti eligendi veniam quia
    reprehenderit doloremque dolores, commodi quae dignissimos nesciunt mollitia quis minima? Magni debitis dicta
    expedita.
    Incidunt, saepe quisquam vitae minus accusamus repellat sit fugit voluptatum id omnis. Necessitatibus, nobis, quidem
    in praesentium id modi quis unde aperiam nostrum esse illum hic eaque, voluptates minus ullam.
    Rem, officia totam. Cupiditate adipisci laudantium quos eligendi deleniti ipsum molestiae odit minima magni,
    delectus at accusamus eveniet aperiam distinctio culpa ratione! Unde pariatur modi ea velit eligendi! Laboriosam,
    quas!
    At illo eius, error ullam reprehenderit veritatis minima. Id quidem deserunt adipisci assumenda natus praesentium
    sapiente aperiam sint dignissimos, iusto voluptas! Totam quibusdam veniam ad quo eos, officiis dolorem perspiciatis?
    Ab incidunt facere quidem nesciunt iusto alias omnis excepturi, tempora nulla nihil, pariatur officia optio
    praesentium porro aperiam esse eos dignissimos ad atque fugit facilis possimus! Cupiditate pariatur ducimus culpa.
    A molestiae distinctio nobis quasi commodi earum nulla, blanditiis dolores in alias voluptas cum! Mollitia illo
    explicabo reiciendis laudantium labore corporis praesentium itaque velit modi eveniet hic, sunt exercitationem
    inventore?
    Fugit at quibusdam recusandae assumenda harum quo suscipit aut ratione, sapiente expedita alias quaerat minima nisi
    labore impedit quae voluptas est quam quisquam! Incidunt pariatur illo, labore facilis in fugiat?
    Possimus soluta earum sint laborum fuga qui iure maxime, harum quidem ex maiores iste ea quisquam molestiae atque
    enim voluptatibus odio officia, excepturi quod. Impedit est eius esse ex quos?
    Illo totam magni magnam rem ab consectetur earum necessitatibus sed nisi molestias cum, velit aliquid deserunt, nam
    commodi asperiores neque at fugiat fuga, eveniet esse! Sapiente praesentium illum recusandae expedita!
    Distinctio officia animi aut voluptate dignissimos magni magnam possimus quo id sunt! Nihil dolores, minus
    repellendus ipsum eveniet, recusandae rerum necessitatibus reiciendis veniam pariatur beatae iste aut corrupti neque
    at?
    Voluptates aspernatur repellendus velit totam nisi dignissimos ex eius eaque sapiente sequi! Asperiores optio sequi
    fugit eligendi adipisci, fuga minus vel dolorum inventore tempora architecto, voluptates explicabo quasi eos ipsum.
    At dolorum repellat delectus tempora laudantium cum? Delectus quam nobis, dolor eligendi exercitationem corrupti
    aperiam! Quis aliquam eius quo ratione expedita deleniti molestiae quibusdam corporis consequatur? Recusandae
    blanditiis quibusdam impedit!
    Ratione, sed in quidem qui dolorum non nihil beatae autem, pariatur libero eius dolores quibusdam assumenda
    provident? Quia nam delectus atque vero veniam provident quidem, maiores voluptates sunt impedit! Est?
    Dignissimos a suscipit id odit ducimus, hic facere consequuntur nobis fugiat adipisci enim tempora at esse possimus
    pariatur! Laboriosam nisi maxime incidunt praesentium atque cumque tempore reiciendis labore itaque eos.
    Perferendis recusandae aliquid incidunt placeat vero distinctio minima dolorum voluptatibus laboriosam quasi, quidem
    voluptate, facilis excepturi vel ratione ipsam quod sunt porro enim animi, suscipit ut sequi iure. Dicta, sunt.
    Eos sequi impedit ipsa earum veritatis cum quam mollitia commodi ab dolore quasi molestiae dolorum sint dolores sunt
    voluptatum aliquam nulla sed est nisi quibusdam, iure expedita repellendus! Aliquam, voluptatibus?
    Hic aperiam libero, non doloremque impedit harum nemo fugit fuga iste quam consequatur blanditiis consequuntur sunt
    eveniet aspernatur eius illum rem, perferendis, eaque repudiandae delectus nihil vitae quis vel! Aliquam?
    Non recusandae, harum, nisi id illo natus saepe reiciendis sapiente magni amet placeat at perspiciatis optio
    reprehenderit? Repellat aperiam ab earum impedit. Omnis laudantium ipsum atque vitae dolorum quaerat. Cum!
    Optio deleniti, odit quod laboriosam ex velit accusantium voluptatibus error eveniet consequuntur soluta aperiam
    distinctio voluptatum? Maiores ea, corrupti distinctio quibusdam nihil dignissimos culpa accusamus architecto iste,
    facere doloremque minima!
    Porro, vitae. Cupiditate culpa commodi quae assumenda in, architecto quam ipsam laboriosam quos repudiandae repellat
    pariatur quas officiis illum deleniti ullam quasi provident numquam ducimus repellendus at incidunt corporis labore.
  </div>

</div>
)
}
