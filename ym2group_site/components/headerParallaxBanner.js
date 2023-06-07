import { ParallaxBanner } from "react-scroll-parallax"; 
import Image from "next/image";

const HeaderParallaxBanner = ({titulo = '', subtitulo = '', imgBackGround = '/img/BG-background.jpg', imgForeGround = '/img/BG-foreground.png'}) => {
    const background = {
      //image:bgDown,
      children: <img src={imgBackGround} alt="banner background promocional" className="w-full aspect-[2/3] lg:aspect-[1/1] xl:aspect-[20/9]"/>,
        // 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg',
      translateY: [0, 50],
      opacity: [1, 0.3],
      scale: [1, 2, 'easeOutCubic'],
      shouldAlwaysCompleteAnimation: true,
    };
  
    const headline = {
      translateY: [0, 30],
      scale: [1, 1.05, 'easeOutCubic'],
      shouldAlwaysCompleteAnimation: true,
      expanded: false,
      children: (
        subtitulo === '' ? 
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold text-white text-center">
              {titulo}
            </h1>
          </div> 
          :
          <div className="absolute inset-0 flex flex-wrap items-center justify-center px-[10%] sm:px-[20%] md:px-[15%] xl:px-[30%]">
            <h1 className="text-2xl sm:text-4xl md:text-6xl -mb-[80px] sm:-mb-[180px] lg:-mb-[200px] font-semibold text-white text-center">
              {titulo}
            </h1>
            <h2 className="px-2 rounded-sm text-xl sm:text-2xl md:text-4xl font-semibold text-orange-500 text-center bg-white lg:bg-transparent">
              {subtitulo}
            </h2>
          </div>                
      ),
    };
  
    const foreground = {
      //image:bgUp,
      //   // 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png',
      children: <img src={imgForeGround} alt="banner promocional" className="w-full aspect-[4/2] lg:aspect-[5/2] xl:aspect-[7/2]"/>,
      translateY: [0, 15],
      scale: [1, 1.80, 'easeOutCubic'],
      shouldAlwaysCompleteAnimation: true,
      expanded: false,
    };
  
    const gradientOverlay = {
      opacity: [0, 0.9],
      shouldAlwaysCompleteAnimation: true,
      expanded: false,
      children: (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
      ),
    };
  
    return (
      <ParallaxBanner
        layers={[background, foreground, headline, gradientOverlay]}
        className="aspect-[2/1] bg-gray-900 lg:h-96"
      />
    );
  };

export default HeaderParallaxBanner;