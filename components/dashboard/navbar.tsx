import Link from "next/link";
import {useState} from "react";

export default function navbar(){
    const [toggle,setToggle] = useState(false);
return(
<div>
    <div className="bg-white px-5 py-3 flex items-center gap-10">
        <div className="lg:w-1/2">
            <input type="text" placeholder="search dashboard" className="w-full border px-5 py-2 text-sm" />
        </div>
        <div className="lg:w-1/2 flex justify-end">
            <div
                className="cursor-pointer rounded-full text-center bg-yellow-500 avatar--image flex items-center text-white font-bold  justify-center"
                onClick={() => setToggle(!toggle)}
                >
                GA
                </div>
                {toggle &&
                <div className="bg-white shadow p-5 absolute float-right lg:top-5 mt-12 z-40">
                    <Link href="/settings">
                    <a className="w-full block my-2 text-sm text-gray-600 hover:text-yellow-500">Profile settings</a>
                    </Link>
                    <hr />
                    <Link href="/settings">
                    <a className="w-full block my-2 text-sm text-gray-600 hover:text-yellow-500">Change password</a>
                    </Link>
                    <hr />
                    <Link href="/settings">
                    <a className="w-full block my-2 text-sm text-gray-600 hover:text-yellow-500">Logout</a>
                    </Link>
                </div>
}
        </div>
    </div>
</div>
)
}