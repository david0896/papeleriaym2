import { useState } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';
import { motion } from "framer-motion";


const options  = {
  autoplay     : true,
  type         : 'fade',
  speed        : '0.5rem',
  gap          : '1rem',
  pauseOnHover : true,
  resetProgress: true,
  rewind       : true,
  height       : '100%',
};

const generateSlides = [
  {
    key: 0,
    titulo:'Financiamos la lista escolar',
    subtitulo:'Para tus colaboradores',
    bg:'https://i.postimg.cc/J4X5rYhc/BANNER-FINANCIAMIENTO-EMPRESAS.jpg',
  },
  {
    key: 1,
    titulo: '¡No te pierdas esta oferta!',
    subtitulo:'Carpetas de fibra a un gran precio',
    bg:'https://i.postimg.cc/s2ctCwBj/OFERTAS-EN-CARPETAS.jpg',
  },
  {
    key: 2,
    titulo: 'Juega y aprende con',
    subtitulo:'nuestros juegos didácticos',
    bg:'https://i.postimg.cc/nz1RDzKn/BANNER-JUEGOS-DIDACTICOS.jpg',
    
  },
  {
    key: 3,
    titulo: '¡No te quedes sin papel para imprimir!',
    subtitulo:'Aquí tenemos suficiente stock',
    bg:'https://i.postimg.cc/QdrTRbGn/RESMAS-DE-PAPEL.jpg',
    
  }, 
];

const CarouselNext = () => {

    let suma = 0; //acumulador de vueltas para cambio de posición de texto en banner
    const generateSlidesLength = Object.keys(generateSlides).length - 1;
    const [alingImgViewPhone, setAlingImgViewPhone] = useState('');
    const [alingText, setAlingText] = useState('');
    const alingLeft = 'lg:text-left lg:left-[4%]';
    const alingCenter = 'lg:text-enter lg:left-[30%]';
    const alingRight = 'lg:text-right lg:left-2/4';
    const [currentSlide, setCurrentSlide] = useState(0);

    const positionMargenTextChange = (index) =>{

      if(index === 0){
        setAlingText(alingLeft);
        setAlingImgViewPhone('object-center');
        suma += 1;
        return
      }else if (index === 1){
        setAlingText(alingCenter);
        setAlingImgViewPhone('object-right');
        suma += 1;
        return
      }else if(index === 2){
        setAlingText(alingRight);
        setAlingImgViewPhone('object-left');
        suma = 0;
        return
      }

      if(suma === 0){
        setAlingText(alingLeft);
        setAlingImgViewPhone('object-center');
        generateSlidesLength === index ? suma = 0 : suma += 1;
        return
      }

      if(suma === 1){
        setAlingText(alingCenter);
        ssetAlingImgViewPhone('object-right');
        generateSlidesLength === index ? suma = 0 : suma += 1;
        return
      }

      if(suma === 2){
        setAlingText(alingRight);
        setAlingImgViewPhone('object-left');
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
                      <Image src={ slide.bg } alt={ slide.titulo } priority className={`w-screen h-[400px] object-cover ${alingImgViewPhone}`} width={720} height={450} quality={100}/>
                      <motion.div 
                        initial={{opacity:0,y:-150}}                         
                        animate={
                          { opacity: currentSlide === slide.key ? 1 : 0,
                            y: currentSlide === slide.key ? 0 : -150
                          }}
                        transition={{duration:1}}
                        className={`
                          ${alingText}
                          animate_animated  
                          animate_fadeIn 
                          absolute
                          text-center
                          w-full
                          lg:w-[40%]
                          top-[5%]
                          px-2
                          lg:px-0
                          lg:top-1/4                                                    
                          opacity-0 
                          transition-opacity 
                          duration-1000
                        `}
                      >
                        <h1 className='text-white font-semibold text-4xl md:text-5xl'>{slide.titulo}</h1>
                        <h2 className='font-medium bg-white px-5 py-2 rounded-md text-orange-400 text-xl md:text-3xl mt-5 inline-block whitespace-nowrap'>{slide.subtitulo}</h2>                       
                      </motion.div>
                    </SplideSlide>
                  ) ) 
                } 
              </SplideTrack>
            </div>
            {/* lg: top-1/4 
            lg: left-2/4 */} 
            <div className="splide__progress">
              <div className="splide__progress__bar" />
            </div>
          </Splide>
        </div>
      );
};

export default CarouselNext;