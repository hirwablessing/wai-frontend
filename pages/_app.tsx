import '../styles/globals.css'
import '../styles/main.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import Router from 'next/router'
import NProgress from 'nprogress'
// import NProgress from 'nprogress' //nprogress module
import 'nprogress/nprogress.css' //styles of nprogress
import { MainContext } from './api/context/MainContext'


//Binding events.
NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainContext>
         <Head>
        <title>WAI</title>
        <meta name="theme-color" content="#031043" />
    <meta
      name="description"
      content="WAI"
    />
      </Head>
  <Component {...pageProps} />
  </MainContext>
  )
  
}
export default MyApp
