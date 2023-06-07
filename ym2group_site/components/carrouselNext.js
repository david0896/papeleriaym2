import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';
import HeaderParallaxBanner from "@/components/headerParallaxBanner";

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
    key: 1,
    titulo:'Financiamos la lista escolar',
    subtitulo:'Para tus colaboradores',
    bg:'/img/bgDown.png',
    fg:'/img/bgUp.png',
  },
  {
    key: 2,
    titulo: 'Adquiere tu lista escolar',
    subtitulo:'¡y paga en cuotas!',
    bg:'/img/bgDownbanner2.png',
    fg:'/img/bgDownbanner2Up.png',

  },
  {
    key: 3,
    titulo: 'En nuestro mes aniversario',
    subtitulo:'obtén súper ofertas',
    bg:'/img/bgDownbanner3.png',
    fg:'/img/bgDownbanner3Up.png',
    
  },
  {
    key: 4,
    titulo: 'Promoción en bolsos',
    subtitulo:'para consentir a papá',
    bg:'/img/bgDownbanner4.png',
    fg:'/img/bgDownbanner4Up.png',
    
  },
];

const CarouselNext = () => {
    return (
        <div className="wrapper">
          <Splide
            options={ options }
            aria-labelledby="autoplay-example-heading"
            hasTrack={ false }
          >
            <div style={ { position: 'relative' } }>
              <SplideTrack>
                { generateSlides.map( slide => ( 
                    <SplideSlide key={ slide.key }>
                      {/* <Image src={ slide.src } alt={ slide.alt } className='w-full lg:h-[500px]' width={100} height={10}/>   */}
                      <HeaderParallaxBanner 
                        key={slide.key}
                        titulo={slide.titulo}
                        subtitulo={slide.subtitulo}
                        imgBackGround={slide.bg}
                        imgForeGround={slide.fg}
                      />
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