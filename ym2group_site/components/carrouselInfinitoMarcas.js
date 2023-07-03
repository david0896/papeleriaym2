import { useState, useEffect } from 'react';
import Image from "next/image"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const logoMarcas = [
    "https://i.postimg.cc/wThyn1mv/caribelogo.jpg",
    "https://i.postimg.cc/mr4cbB7w/maykalogo.jpg",
    "https://i.postimg.cc/rsSLmDRp/descarga.png" ,
    "https://i.postimg.cc/KzQmrkvs/exodus.png",
    "https://i.postimg.cc/xCSdPNDK/foska.png",
    "https://i.postimg.cc/PrYx7MyB/solita.webp",
    "https://i.postimg.cc/26Bg2RXs/logohp.jpg",
    "https://i.postimg.cc/P5nLf7NX/ofiart.png",
    "https://i.postimg.cc/8CLhHZmy/logoofimak.jpg",
    "https://i.postimg.cc/1zbjg75J/logoprinta.jpg",
    "https://i.postimg.cc/x1nY8CFc/okprodimarca.jpg",
    "https://i.postimg.cc/Fsq3XMPW/logosysabe.jpg",
    "https://i.postimg.cc/0QT1s2w5/pavecalogo.jpg",
]

export default function CarrouselInfinitoMarcas() {

    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        const updateWindowDimensions = () => {
          const { innerWidth: width } = window;
          setWindowWidth(width);
        };
    
        // Agrega un listener para detectar cambios en la resolución de pantalla
        window.addEventListener('resize', updateWindowDimensions);
    
        // Al cargar el componente, obtén el tamaño de la pantalla
        updateWindowDimensions();
    
        // Limpia el listener cuando el componente es desmontado
        return () => {
          window.removeEventListener('resize', updateWindowDimensions);
        };
      }, []);
      
    const showSlides= windowWidth  <= 600 ? 3 : 6;
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: showSlides,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
      };

    return (        
        <div>
            <Slider {...settings}>
                {logoMarcas.map((image, index) => (
                    <div key={index} className="flex justify-center items-center">
                        <Image src={image} alt={`Image ${index + 1}`} className=" object-center object-contain w-40 h-40  " width={300} height={300}/>
                    </div>
                ))}
            </Slider>
        </div>
    )
}