import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin = {'true'}/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;800;900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap" rel="stylesheet"></link>
      </Head>
      <body className="font-monse">
        <Main />
        <NextScript />
        <script 
          src="https://cdn2.woxo.tech/a.js#640f02e8576ff7d3f71f7e8d" 
          async data-usrc>
        </script>
        {/* <script src="/node_module/tw-elements/dist/js/index.min.js"></script> */}
        <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>
      </body>
    </Html>
  )
}
