import {createContext, useContext, useState} from 'react'
import { User } from '../../types/User'
import { UserCon } from '../../types/UserContext'


export type GlobalUser ={
  user:User,
  setUser:(user: User) => void
}

export const UserContext = createContext<GlobalUser>({
    user:{_id:'',
    first_name:'',
    last_name:'',
    email:'',
    password:'',
    phone:0,
    gender:'',
    active:false,
    createdAt:'',
    updatedAt:'',
},
setUser:()=>{}
    
})
export const UserGlobalContext = () => useContext(UserContext)

//  const UserGlobalContext = ({children}:any)=>{
// return(
//     <UserContext.Provider
//     value={{setUserInfo }}
//   >
//     {children}
//   </UserContext.Provider>
// )

// } 
// export {UserGlobalContext};