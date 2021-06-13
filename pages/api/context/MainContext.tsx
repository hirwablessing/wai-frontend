import { useEffect, useState } from "react"
import {useRouter} from 'next/router'
import { LoggedInUser } from "../../../components/types/User"
import { UserContext } from "./UserContext"


export const MainContext = (props:any)=>{
    
const router = useRouter();
  const [user,setUser]= useState<LoggedInUser>(
    {_id:'',
    first_name:'',
    second_name:'',
    email:'',
    iat:0,
    gender:'',
}
  )

  const [checking,setChecking] = useState<Boolean>(true)


//   function tologout

const logout = ()=>{
    localStorage.clear();
    router.push("/login")
}
    useEffect(() => {
    let data:any = JSON.parse(localStorage.getItem("user") || '{}');
    setUser(data)

    
    if(!(data?._id)){
        if(router.pathname.startsWith("/panel")){
            router.push("/login")
        }
        
    } else setChecking(false)

},[checking])




    return(
        
  <UserContext.Provider value={{user, setUser,logout,checking}}>
      {props.children}
  </UserContext.Provider>
    )
}