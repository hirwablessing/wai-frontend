import Link from "next/link";
import {useRouter} from "next/router"

export default function sidebar(){
    const router = useRouter();
    return(
        <div className="sidebar bg-white lg:w-1/5 h-screen top-0 sticky overflow-y-auto">
                <div className="upper--bound flex gap-5 mb-5 p-5 items-center">
                    <span className="bg-yellow-500 rounded-lg text-white p-5">logo</span><h1>World Amenders International (WAI)</h1>
                </div>
                <hr />

                <div className="links my-10 pl-5">
                    <Link href="/dashboard">
                          <a className={(router.pathname.startsWith('/dashboard')===true)?"activeSidebarLink block ":"block"}>Dashboard</a>
                    </Link>
                    <Link href="/dashboard">
                        <a className={(router.pathname.startsWith('/posts')===true)?"activeSidebarLink block":"block"}>Posts</a>
                    </Link>
                    <Link href="/dashboard">
                        <a className={(router.pathname.startsWith('/settings')===true)?"activeSidebarLink block":"block"}>Settings</a>
                    </Link>

                    <span className="w-full block cursor-pointer" onClick={() => router.push('/login')}>Logout
                        
                    </span>
                    
                </div>
        </div>
    )
}