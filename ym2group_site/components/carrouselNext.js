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
      '/img/bannerarticulosdeoficina.svg',
    alt: 'Carousel Image 1',
  },
  {
    src:
      '/img/bannerarticulosescolares.svg',
    alt: 'Carousel Image 2',
  },
  {
    src:
      '/img/bannerpromoinauguracionweb.svg',
    alt: 'Carousel Image 3',
  },
  {
    src:
      '/img/bannerjuegosdidacticos.svg',
    alt: 'Carousel Image 4',
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
                  <SplideSlide key={ slide.src }>
                    <img src={ slide.src } alt={ slide.alt }/>
                  </SplideSlide>
                ) ) }
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