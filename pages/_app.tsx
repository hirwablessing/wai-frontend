import '../styles/globals.css'
import '../styles/main.css'
import type { AppProps } from 'next/app'

import Router from 'next/router'
import NProgress from 'nprogress'
// import NProgress from 'nprogress' //nprogress module
import 'nprogress/nprogress.css' //styles of nprogress
import { UserContext } from './api/context/UserContext'
import { User } from './types/User'
import { useState } from 'react'


//Binding events.
NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
  const [user,setUser]= useState<User>({
    _id:'',
    first_name:'hello',
    last_name:'',
    email:'',
    password:'',
    phone:0,
    gender:'',
    active:false,
    createdAt:'',
    updatedAt:'',
  })
  return (
  <UserContext.Provider value={{user, setUser}}>
  <Component {...pageProps} />
  </UserContext.Provider>
  )
  
}
export default MyApp
