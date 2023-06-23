import { useState } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';
import HeaderParallaxBanner from "@/components/headerParallaxBanner";
import { motion } from "framer-motion";


const options  = {
  autoplay     : true,
  type         : 'fade',
  gap          : '1rem',
  pauseOnHover : false,
  resetProgress: true,
  rewind       : true,
  height       : '100%',
};

const generateSlides = [
  {
    key: 0,
    titulo:'Financiamos la lista escolar',
    subtitulo:'Para tus colaboradores',
    bg:'/img/bannerPromocional1.svg',
  },
  /* {
    key: 1,
    titulo: 'Adquiere tu lista escolar',
    subtitulo:'¡y paga en cuotas!',
    bg:'/img/bgCarrusel2.webp',
    fg:'/img/fgCarrusel2.webp',

  },
  {
    key: 2,
    titulo: 'En nuestro mes aniversario',
    subtitulo:'obtén súper ofertas',
    bg:'/img/bgCarrusel3.webp',
    fg:'/img/fgCarrusel3.webp',
    
  },
  {
    key: 3,
    titulo: 'Promoción en bolsos',
    subtitulo:'para consentir a papá',
    bg:'/img/bgCarrusel4.webp',
    fg:'/img/fgCarrusel4.webp',
    
  }, */
];

const CarouselNext = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (slide) => {
      setCurrentSlide(slide.index);
    };

    return (
        <div className="wrapper">
          <Splide
            options={ options }
            aria-labelledby="autoplay-example-heading"
            hasTrack={ false }
            onMove={handleSlideChange}
          >''
            <div style={ { position: 'relative' } }>
              <SplideTrack>
                { generateSlides.map( slide => (
                    <SplideSlide key={ slide.key }>
                      <Image src={ slide.bg } alt={ slide.titulo } className=' w-screen h-[400px] object-cover' width={100} height={10}/>  
                      <motion.div 
                        initial={{opacity:0,x:-150}}                         
                        animate={
                          { opacity: currentSlide === slide.key ? 1 : 0,
                            x: currentSlide === slide.key ? 0 : -150
                          }}
                        transition={{duration:1}}
                        className='animate_animated animate_fadeIn absolute text-center lg:text-left top-[5%] left-[8%] right-[8%] lg:top-[30%] lg:left-[4%] lg:right-[50%] opacity-0 transition-opacity duration-1000'
                      >
                        <h1 className='text-white font-semibold text-4xl md:text-5xl'>{slide.titulo}</h1>
                        <h2 className='font-medium bg-white px-5 py-2 rounded-md text-orange-400 text-xl md:text-3xl mt-5 lg:mr-[20%] inline-block whitespace-nowrap'>{slide.subtitulo}</h2>                       
                      </motion.div>
                      {/* <HeaderParallaxBanner 
                        key={slide.key}
                        titulo={slide.titulo}
                        subtitulo={slide.subtitulo}
                        imgBackGround={slide.bg}
                        imgForeGround={slide.fg}
                      /> */}
                    </SplideSlide>
                  ) ) 
                } 
              </SplideTrack>
            </div>
    
            <div className="splide__progress">
              <div className="splide__progress__bar" />
            </div>
          </Splide>
        </div>
      );
};

export default CarouselNext;