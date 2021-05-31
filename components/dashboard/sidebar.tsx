import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
    AppstoreOutlined, SettingOutlined, LogoutOutlined, AlignRightOutlined, FileTextOutlined,
    CreditCardOutlined, CloseOutlined
  } from '@ant-design/icons'

export default function sidebar() {
const [openSettingSubmenu, setOpenSettingSubmenu] = useState(false);
const [openNewsSubmenu, setOpenNewsSubmenu] = useState(false);
const router = useRouter();
return (
<div className="sidebar bg-white lg:w-1/5 h-screen top-0 sticky overflow-y-auto">
    <div className="upper--bound flex gap-5 mb-5 p-5 items-center">
        <span className="bg-blue-700 rounded-lg text-white p-5">logo</span>
        <h1>World Amenders International (WAI)</h1>
    </div>
    <hr />

    <div className="links my-10 pl-">
        <Link href="/dashboard">
        <a className={ router.pathname.startsWith("/dashboard")===true ? "activeSidebarLink block " : "block" }>
        <AppstoreOutlined style={{ fontSize: '17px' }} className=""/> <span> Dashboard </span>
        </a>
        </Link>

        {/* news */}
        <span onClick={()=> setOpenNewsSubmenu(!openNewsSubmenu)}
            className={
            router.pathname.startsWith("/articles") === true
            ? "activeSidebarLink block cursor-pointer"
            : "block cursor-pointer"
            }
            >
            <FileTextOutlined style={{ fontSize: '17px' }}/> <span> News </span>
        </span>
        {openNewsSubmenu && (
        <div className="ml-10 text-gray-500">
            <Link href="/articles/create">
            <a className={ router.pathname.startsWith("/articles/create")===true ? "activeSidebarLink block"
                : "block" }>
                 Create article
            </a>
            </Link>
            <Link href="/articles">
            <a className={ router.pathname.startsWith("/articles")===true ? "activeSidebarLink block"
                : "block" }>
                List all articles
            </a>
            </Link>
        </div>
        )}

        {/* settings */}
        <span onClick={()=> setOpenSettingSubmenu(!openSettingSubmenu)}
            className={
            router.pathname.startsWith("/settings") === true
            ? "activeSidebarLink block cursor-pointer"
            : "block cursor-pointer"
            }
            >
          <SettingOutlined style={{ fontSize: '17px' }}/> <span> Settings </span>
        </span>
        {openSettingSubmenu && (
        <div className="ml-10 text-gray-500">
            <Link href="/settings/profilesettings">
            <a className={ router.pathname.startsWith("/settings/profilesettings")===true ? "activeSidebarLink block"
                : "block" }>
                Profile settings
            </a>
            </Link>
            <Link href="/settings/changepassword">
            <a className={ router.pathname.startsWith("/settings/changepassword")===true ? "activeSidebarLink block"
                : "block" }>
                Change password
            </a>
            </Link>
        </div>
        )}
        <span className="w-full block cursor-pointer" onClick={()=> router.push("/login")}
            >
             <LogoutOutlined style={{ fontSize: '17px' }}/> <span> Logout </span>
        </span>
    </div>
</div>
);
}
