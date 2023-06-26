import { useState } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';
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
  {
    key: 1,
    titulo: 'Pide tu lista escolar',
    subtitulo:'¡y paga en cuotas!',
    bg:'/img/bannerPromocion2.svg',
  },
  {
    key: 2,
    titulo: 'En nuestro mes aniversario',
    subtitulo:'obtén súper ofertas',
    bg:'/img/bannnerSpaceBluePrueba.jpg',
    
  },
  {
    key: 3,
    titulo: 'Promoción en bolsos',
    subtitulo:'para consentir a papá',
    bg:'/img/bannnerSpaceBluePrueba.jpg',
    
  }, 
];

const CarouselNext = () => {

    let suma = 0; //acumulador de vueltas para cambio de posición de texto en banner
    const generateSlidesLength = Object.keys(generateSlides).length - 1;
    const [alingText, setAlingText] = useState('');
    const [margenLeft, setMargenLeft] = useState('');
    const [margenRight, setMargenRight] = useState('');
    const [currentSlide, setCurrentSlide] = useState(0);

    const positionMargenTextChange = (index) =>{

      if(index === 0){
        setMargenLeft('4%'); 
        setMargenRight('50%');
        setAlingText('text-left');
        suma += 1;
        return
      }else if (index === 1){
        setMargenLeft('20%');
        setMargenRight('20%');
        setAlingText('text-center');
        suma += 1;
        return
      }else if(index === 2){
        setMargenLeft('50%');
        setMargenRight('4%');
        setAlingText('text-right');
        suma = 0;
        return
      }

      if(suma === 0){
        setMargenLeft('4%'); 
        setMargenRight('50%');
        setAlingText('text-left');
        generateSlidesLength === index ? suma = 0 : suma += 1;
        return
      }

      if(suma === 1){
        setMargenLeft('20%');
        setMargenRight('20%');
        setAlingText('text-center');
        generateSlidesLength === index ? suma = 0 : suma += 1;
        return
      }

      if(suma === 2){
        setMargenLeft('50%');
        setMargenRight('4%');
        setAlingText('text-right');
        suma = 0;
        return
      }

    }

    const handleSlideChange = (slide) => {
      positionMargenTextChange(slide.index);
      setCurrentSlide(slide.index);  

    };

    return (
        <div className="wrapper">
          <Splide
            options={ options }
            aria-labelledby="autoplay-example-heading"
            hasTrack={ false }
            onActive={handleSlideChange}
          >
            <div style={ { position: 'relative' } }>
              <SplideTrack>
                { generateSlides.map( slide => (
                    <SplideSlide key={ slide.key }> 
                      <Image src={ slide.bg } alt={ slide.titulo } className=' w-screen h-[400px] object-cover' width={100} height={10}/>
                      <motion.div 
                        initial={{opacity:0,y:-150}}                         
                        animate={
                          { opacity: currentSlide === slide.key ? 1 : 0,
                            y: currentSlide === slide.key ? 0 : -150
                          }}
                        transition={{duration:1}}
                        className={`
                          animate_animated 
                          animate_fadeIn 
                          absolute 
                          text-center 
                          lg:${alingText} 
                          top-[5%] 
                          left-[8%] 
                          right-[8%] 
                          lg:top-[30%] 
                          lg:left-[${margenLeft}] 
                          lg:right-[${margenRight}] 
                          opacity-0 
                          transition-opacity 
                          duration-1000
                        `}
                        //4 -50 /  inline-block whitespace-nowrap lg:mr-[20%]
                      >
                        <h1 className='text-white font-semibold text-4xl md:text-5xl'>{slide.titulo}</h1>
                        <h2 className='font-medium bg-white px-5 py-2 rounded-md text-orange-400 text-xl md:text-3xl mt-5 inline-block whitespace-nowrap'>{slide.subtitulo}</h2>                       
                      </motion.div>
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