import { useEffect } from 'react';
import '@/styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax';

export default function App({ Component, pageProps }) {

  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);

  return ( 
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  )
}