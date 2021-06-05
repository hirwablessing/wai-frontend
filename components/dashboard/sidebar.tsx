import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import {UserContext} from '../../pages/api/context/UserContext'
import {
    AppstoreOutlined, SettingOutlined, LogoutOutlined, AlignRightOutlined, FileTextOutlined,
    CreditCardOutlined, CloseOutlined
  } from '@ant-design/icons'

export default function sidebar() {
const [openSettingSubmenu, setOpenSettingSubmenu] = useState(false);
const [openNewsSubmenu, setOpenNewsSubmenu] = useState(false);
const router = useRouter();
const {logout} = useContext(UserContext)
return (
<div className="sidebar bg-white lg:w-1/5 h-screen top-0 sticky overflow-y-auto">
    <div className="upper--bound flex gap-5 mb-5 p-5 items-center">
        <span className="bg-blue-700 rounded-lg text-white p-5">logo</span>
        <h1>World Amenders International (WAI)</h1>
    </div>
    <hr />

    <div className="links my-10 pl-">
        <Link href="/panel/dashboard">
        <a className={ router.pathname.startsWith("/panel/dashboard")===true ? "activeSidebarLink block " : "block" }>
        <AppstoreOutlined style={{ fontSize: '17px' }} className=""/> <span> Dashboard </span>
        </a>
        </Link>

        {/* news */}
        <span onClick={()=> setOpenNewsSubmenu(!openNewsSubmenu)}
            className={
            router.pathname.startsWith("/panel/articles") === true
            ? "activeSidebarLink block cursor-pointer"
            : "block cursor-pointer"
            }
            >
            <FileTextOutlined style={{ fontSize: '17px' }}/> <span> News </span>
        </span>
        {openNewsSubmenu && (
        <div className="ml-10 text-gray-500">
            <Link href="/panel/articles/create">
            <a className={ router.pathname.startsWith("/panel/articles")===true ? "activeSidebarLink block"
                : "block" }>
                 Create article
            </a>
            </Link>
            <Link href="/panel/articles/list">
            <a className={ router.pathname.startsWith("/panel/articles")===true ? "activeSidebarLink block"
                : "block" }>
                List all articles
            </a>
            </Link>
        </div>
        )}

        {/* settings */}
        <span onClick={()=> setOpenSettingSubmenu(!openSettingSubmenu)}
            className={
            router.pathname.startsWith("/panel/settings") === true
            ? "activeSidebarLink block cursor-pointer"
            : "block cursor-pointer"
            }
            >
          <SettingOutlined style={{ fontSize: '17px' }}/> <span> Settings </span>
        </span>
        {openSettingSubmenu && (
        <div className="ml-10 text-gray-500">
            <Link href="/panel/settings/profile">
            <a className={ router.pathname.startsWith("/panel/settings/profile")===true ? "activeSidebarLink block"
                : "block" }>
                Profile
            </a>
            </Link>
            <Link href="/panel/settings/changepassword">
            <a className={ router.pathname.startsWith("/panel/settings/changepassword")===true ? "activeSidebarLink block"
                : "block" }>
                Change password
            </a>
            </Link>
        </div>
        )}
        <span className="w-full block cursor-pointer" onClick={()=> logout()}
            >
             <LogoutOutlined style={{ fontSize: '17px' }}/> <span> Logout </span>
        </span>
    </div>
</div>
);
}
