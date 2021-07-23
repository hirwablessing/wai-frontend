import {useRouter} from 'next/router';
import Link from 'next/link';
export default function news(props:any){
  const router = useRouter();
    return(
        <div className="mt-10">
            <div className="title text-md font-bold text-blue-700 ml-5 lg:ml-12 my-5 uppercase">{props.title}</div>
  <div className="w-full p-1 gap-5 lg:flex px-5 lg:px-12 my-5 lg:my-12">
    <div className="mt-5 lg:mt-0 border hover:border-blue-400 p-3 cursor-pointer" onClick={()=>router.push('/article')}>
      <h1 className="text-sm font-bold text-gray-500 my-3">Article #1</h1>
      <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, unde.</p>
      <br />
      <span className="data text-gray-400 text-xs w-full block">2021-02-03</span>
      <div className="my-2">
        <Link href="/article"><a className="text-blue-700 text-xs hover:underline">Read more</a></Link>
      </div>
    </div>
    <div className="mt-5 lg:mt-0 border hover:border-blue-400 p-3 cursor-pointer" onClick={()=>router.push('/article')}>
      <h1 className="text-sm font-bold text-gray-500 my-3">Article #1</h1>
      <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, unde.</p>
      <br />
      <span className="data text-gray-400 text-xs w-full block">2021-02-03</span>
      <div className="my-2">
        <Link href="/article"><a className="text-blue-700 text-xs hover:underline">Read more</a></Link>
      </div>
    </div>
    <div className="mt-5 lg:mt-0 border hover:border-blue-400 p-3 cursor-pointer" onClick={()=>router.push('/article')}>
      <h1 className="text-sm font-bold text-gray-500 my-3">Article #1</h1>
      <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, unde.</p>
      <br />
      <span className="data text-gray-400 text-xs w-full block">2021-02-03</span>
      <div className="my-2">
        <Link href="/article"><a className="text-blue-700 text-xs hover:underline">Read more</a></Link>
      </div>
    </div>
    <div className="mt-5 lg:mt-0 border hover:border-blue-400 p-3 cursor-pointer" onClick={()=>router.push('/article')}>
      <h1 className="text-sm font-bold text-gray-500 my-3">Article #1</h1>
      <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, unde.</p>
      <br />
      <span className="data text-gray-400 text-xs w-full block">2021-02-03</span>
      <div className="my-2">
        <Link href="/article"><a className="text-blue-700 text-xs hover:underline">Read more</a></Link>
      </div>
    </div>
  </div>
        </div>
    )
}