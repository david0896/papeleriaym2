import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '@/styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import Mantenimiento from './mantenimiento';

export default function App({ Component, pageProps }) {

  const router = useRouter();
  const enMantenimiento = true;
  useEffect(() => {
    
    const handleRouteChange = (url) => {
      window.gtag("config", 'G-DTB6V5Z42N', {
          page_path: url,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return ( 
    <ParallaxProvider>
      {enMantenimiento && router.pathname !== '/mantenimiento' ? <Mantenimiento/> : <Component {...pageProps} />}
    </ParallaxProvider>
  )
}