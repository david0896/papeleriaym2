import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '@/styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import Mantenimiento from './mantenimiento';

export default function App({ Component, pageProps }) {

  const router = useRouter();
  const enMantenimiento = false;
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);

  return ( 
    <ParallaxProvider>
      {enMantenimiento && router.pathname !== '/mantenimiento' ? <Mantenimiento/> : <Component {...pageProps} />}
    </ParallaxProvider>
  )
}