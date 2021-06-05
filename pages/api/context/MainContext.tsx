import { useEffect, useState } from "react"
import {useRouter} from 'next/router'
import { LoggedInUser } from "../../types/User"
import { UserContext } from "./UserContext"


export const MainContext = (props:any)=>{
    
const router = useRouter();
  const [user,setUser]= useState<LoggedInUser>({})
//   function tologout

const logout = ()=>{
    localStorage.clear();
    router.push("/panel/login")
}
    useEffect(() => {
    let data:any = JSON.parse(localStorage.getItem("user") || '{}');
    setUser(data)
},[user])

    return(
        
  <UserContext.Provider value={{user, setUser,logout}}>
      {props.children}
  </UserContext.Provider>
    )
}