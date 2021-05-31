import Link from "next/link";
import {useState} from "react";

export default function navbar(){
    const [toggle,setToggle] = useState(false);
return(
<div>
    <div className="bg-white px-5 py-3 flex items-center gap-10">
        <div className="lg:w-1/2">
            <input type="text" placeholder="search dashboard" className="w-full rounded-full bg-gray-50 px-10 py-3 text-sm text-dark-500 focus:outline-none" />
        </div>
        <div className="lg:w-1/2 flex justify-end">
            <div
                className="cursor-pointer rounded-full text-center bg-blue-700 avatar--image flex items-center text-white font-bold  justify-center"
                onClick={() => setToggle(!toggle)}
                >
                GA
                </div>
                {toggle &&
                <div className="bg-white shadow p-5 absolute float-right lg:top-5 mt-12 z-40">
                    <Link href="/settings">
                    <a className="w-full block my-2 text-sm text-gray-600 hover:text-blue-700">Profile settings</a>
                    </Link>
                    <hr />
                    <Link href="/settings">
                    <a className="w-full block my-2 text-sm text-gray-600 hover:text-blue-700">Change password</a>
                    </Link>
                    <hr />
                    <Link href="/settings">
                    <a className="w-full block my-2 text-sm text-gray-600 hover:text-blue-700">Logout</a>
                    </Link>
                </div>
}
        </div>
    </div>
</div>
)
}