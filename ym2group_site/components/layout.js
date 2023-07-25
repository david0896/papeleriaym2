import Head from "next/head"
import Header from "./header"
import Footer from "./footer"

export default function Layout({children, title = '', description = ''}) {
  return (
    <div>
        <Head>
            <title>{`YM2 GROUP ${title}` }</title>
            <meta name="description" content={description}/> 
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-DTB6V5Z42N"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)} 
              gtag('js', new Date());

              gtag('config', 'G-DTB6V5Z42N');
            </script>
        </Head>
        <Header/>
        {children}
        <Footer/>        
    </div>
  )
}
