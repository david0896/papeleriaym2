import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';

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
    src:
      '/img/banner_1_promo_dia_de_las_madres.svg',
    alt: 'banner promo día de las madres',
  },
  {
    src:
      '/img/banner_4_promo_bolsos.svg',
    alt: 'banner promoción de bolsos originales',
  },
  {
    src:
      '/img/banner_5_pinturas_acrilicas.svg',
    alt: 'banner pinturas acrilicas',
  },
  /* {
    src:
      '/img/banner_3_feliz_dia_de_las_madres.svg',
    alt: 'banner feliz día de las madres',
  },  */
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
                    <SplideSlide key={ slide.src }>
                      <Image src={ slide.src } alt={ slide.alt } className='w-full lg:h-[500px]' width={100} height={10}/>  
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