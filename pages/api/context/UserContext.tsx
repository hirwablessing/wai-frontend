import {createContext, useContext} from 'react'
import { LoggedInUser } from '../../../components/types/User'


export type GlobalUser ={
  user:LoggedInUser,
  setUser:(user: LoggedInUser) => void,
  logout:() => void
}

export const UserContext = createContext<GlobalUser>({
    user:{_id:'',
    first_name:'',
    second_name:'',
    email:'',
    iat:0,
    gender:'',
},
setUser:()=>{},
logout:()=>{}
    
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