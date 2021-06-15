import {createContext, useContext} from 'react'
import { LoggedInUser } from '../../../components/types/User'


export type GlobalUser ={
  user:LoggedInUser,
  setUser:(user: LoggedInUser) => void,
  logout:() => void,
checking:Boolean
}

export const UserContext = createContext<GlobalUser>({
    user:{_id:'',
    first_name:'',
    second_name:'',
    email:'',
    role:'',
    iat:0,
    gender:'',
},
setUser:()=>{},
logout:()=>{},
checking:false
    
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