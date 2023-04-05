import { useState } from "react";
import Layout from "@/components/layout"
import Image from "next/image";
import Link from "next/link";
import HeaderParallaxBanner from "@/components/headerParallaxBanner";
import ProductosEnPromocion from "@/components/productosEnPromocion";
import ProductoPromocionado from "@/components/productoPromocionado";

let arrProductosEnPromocion = [
    {
        id: 1,
        imagen: 'https://i.postimg.cc/YqMdPbfP/ORGANIZADOR-DE-ESCRITORIO-PRINTA.png',
        titulo: 'Organizador de escritorio Printa',
        precioAnterior: 8.50,
        precioNuevo: 5.95,
        url: 'https://api.whatsapp.com/send/?phone=584241376004&text=Hola%20Ym2%20papeleria%20quisiera%20mas%20informacion%20sobre%20organizador%20de%20escritorio%20printa%20https://i.postimg.cc/YqMdPbfP/ORGANIZADOR-DE-ESCRITORIO-PRINTA.png',
        flagOfertaLimitada: false,
        btnVermas: false
    },{
        id: 2,
        imagen: 'https://i.postimg.cc/N0vqCZbH/DISPENSADOR-DE-CINTA-PLASTICA-OFIMAK.png',
        titulo: 'Dispensador de cinta plastica peq Ofimak',
        precioAnterior: 2.70,
        precioNuevo: 1.89,
        url: 'https://api.whatsapp.com/send/?phone=584241376004&text=Hola%20Ym2%20papeleria%20quisiera%20mas%20informacion%20sobre%20Dispensador%20de%20cinta%20plastica%20peq%20Ofimak%20https://i.postimg.cc/N0vqCZbH/DISPENSADOR-DE-CINTA-PLASTICA-OFIMAK.png',
        flagOfertaLimitada: false,
        btnVermas: false
    },{
        id: 3,
        imagen: 'https://i.postimg.cc/nhPYHtNX/BOLIGRAFO-METRIX-AZUL-OFIMAK.png',
        titulo: 'Boligrafo azul metrix punta media Ofimak',
        precioAnterior: 2.20,
        precioNuevo: 1.54,
        url: 'https://api.whatsapp.com/send/?phone=584241376004&text=Hola%20Ym2%20papeleria%20quisiera%20mas%20informacion%20sobre%20Boligrafo%20azul%20metrix%20punta%20media%20Ofimak%20https://i.postimg.cc/nhPYHtNX/BOLIGRAFO-METRIX-AZUL-OFIMAK.png',
        flagOfertaLimitada: false,
        btnVermas: false
    },{
        id: 4,
        imagen: 'https://i.postimg.cc/C1QV752F/BOLIGRAFO-METRIX-NEGRO-OFIMAK.png',
        titulo: 'Boligrafo negro metrix punta media Ofimak',
        precioAnterior: 2.20,
        precioNuevo: 1.54,
        url: 'https://api.whatsapp.com/send/?phone=584241376004&text=Hola%20Ym2%20papeleria%20quisiera%20mas%20informacion%20sobre%20Boligrafo%20negro%20metrix%20punta%20media%20Ofimak%20https://i.postimg.cc/C1QV752F/BOLIGRAFO-METRIX-NEGRO-OFIMAK.png',
        flagOfertaLimitada: false,
        btnVermas: false
    },{
        id: 5,
        imagen: 'https://i.postimg.cc/C1QV752F/BOLIGRAFO-METRIX-NEGRO-OFIMAK.png',
        titulo: 'Marcador detector de billetes falsos',
        precioAnterior: 3,
        precioNuevo: 2,
        url: 'https://api.whatsapp.com/send/?phone=584241376004&text=Hola%20Ym2%20papeleria%20quisiera%20mas%20informacion%20sobre%20Marcador%20detector%20de%20billetes%20falsos%20https://i.postimg.cc/C1QV752F/BOLIGRAFO-METRIX-NEGRO-OFIMAK.png',
        flagOfertaLimitada: false,
        btnVermas: false
    },{
        id: 6,
        imagen: 'https://i.postimg.cc/FRB7S9gS/COLORES-ACUARELABLES-X-24-PINCEL-KORES.png',
        titulo: 'Colores acurelables x24 + pincel Kores',
        precioAnterior: 17,
        precioNuevo: 11.90,
        url: 'https://api.whatsapp.com/send/?phone=584241376004&text=Hola%20Ym2%20papeleria%20quisiera%20mas%20informacion%20sobre%20Colores%20acurelables%20x12%20mas%20pincel%20Kores%20https://i.postimg.cc/FRB7S9gS/COLORES-ACUARELABLES-X-24-PINCEL-KORES.png',
        flagOfertaLimitada: false,
        btnVermas: false
    },{
        id: 7,
        imagen: 'https://i.postimg.cc/xTSb3dVG/PORTAPLANOS-PLASTICO-MARCA-OK-105-X-1350-X-780-NEGRO.png', 
        titulo: 'Porta planos plastico Ok negro',
        precioAnterior: 15,
        precioNuevo: 9,
        url: 'https://api.whatsapp.com/send/?phone=584241376004&text=Hola%20Ym2%20papeleria%20quisiera%20mas%20informacion%20sobre%20Porta%20planos%20plastico%20Ok%20negro%20https://i.postimg.cc/xTSb3dVG/PORTAPLANOS-PLASTICO-MARCA-OK-105-X-1350-X-780-NEGRO.png',
        flagOfertaLimitada: false,
        btnVermas: false
    },{
        id: 8,
        imagen: 'https://i.postimg.cc/QdCNQLCk/BORRONA-NATA-MARCA-MAYKA.jpg',
        titulo: 'Borrona Nata',
        precioAnterior: 4.20,
        precioNuevo: 2.94,
        url: 'https://api.whatsapp.com/send/?phone=584241376004&text=Hola%20Ym2%20papeleria%20quisiera%20mas%20informacion%20sobre%20Borrona%20Nata%20https://i.postimg.cc/QdCNQLCk/BORRONA-NATA-MARCA-MAYKA.jpg',
        flagOfertaLimitada: false,
        btnVermas: false
    },{
        id: 9,
        imagen: 'https://i.postimg.cc/gJHP94r2/PINTURA-AL-FRIO-6-1-MARCA-KORES.png',
        titulo: 'Pintura al frío 22ml 6col más un brillo estuche Kores',
        precioAnterior: 6,
        precioNuevo: 4.20,
        url: 'https://api.whatsapp.com/send/?phone=584241376004&text=Hola%20Ym2%20papeleria%20quisiera%20mas%20informacion%20sobre%20Pintura%20al%20frio%2022ml%206col%20mas%20un%20brillo%20estuche%20Kores%20https://i.postimg.cc/gJHP94r2/PINTURA-AL-FRIO-6-1-MARCA-KORES.png',
        flagOfertaLimitada: false,
        btnVermas: false
    },{
        id: 10,
        imagen: 'https://i.postimg.cc/RCYgSKfS/TEMPERA-6-1-MARCA-KORES.png',
        titulo: 'Tempera 6 más un estuche Kores',
        precioAnterior: 4,
        precioNuevo: 2.80,
        url: 'https://api.whatsapp.com/send/?phone=584241376004&text=Hola%20Ym2%20papeleria%20quisiera%20mas%20informacion%20sobre%20Tempera%206%20más%20un%20estuche%20Kores%20https://i.postimg.cc/RCYgSKfS/TEMPERA-6-1-MARCA-KORES.png',
        flagOfertaLimitada: false,
        btnVermas: false
    },{
        id: 11,
        imagen: 'https://i.postimg.cc/TYqQrSFw/BANDEJA-2-NIVELES-PLATA-MARCA-TAFF.png',
        titulo: 'Bandeja de malla 2 divisores plata',
        precioAnterior: 19,
        precioNuevo: 13.30,
        url: 'https://api.whatsapp.com/send/?phone=584241376004&text=Hola%20Ym2%20papeleria%20quisiera%20mas%20informacion%20sobre%20Bandeja%20de%20malla%202%20divisores%20plata%20https://i.postimg.cc/TYqQrSFw/BANDEJA-2-NIVELES-PLATA-MARCA-TAFF.png',
        flagOfertaLimitada: false,
        btnVermas: false
    },{
        id: 12,
        imagen: 'https://i.postimg.cc/jqhJvbxG/BANDEJA-3-NIVELES-NEGRA-MARCA-OFIART.png',
        titulo: 'Bandeja de malla 3 divisores negra',
        precioAnterior: 27,
        precioNuevo: 18.90,
        url: 'https://api.whatsapp.com/send/?phone=584241376004&text=Hola%20Ym2%20papeleria%20quisiera%20mas%20informacion%20sobre%20Bandeja%20de%20malla%203%20divisores%20negra%20https://i.postimg.cc/jqhJvbxG/BANDEJA-3-NIVELES-NEGRA-MARCA-OFIART.png',
        flagOfertaLimitada: false,
        btnVermas: false
    },
];

let arrProductosEnPromocionSinVerMas = [
    {
        id: 1,
        imagen: '/img/descuentomarcadorpizarrablanca.svg',
        titulo: 'Marcador pizarra rojo punta fina Ofiart',
        precioAnterior: 7.90,
        precioNuevo: 5.50,
        url: 'https://api.whatsapp.com/send/?phone=584241376004&text=Hola%20Ym2%20papeleria%20quisiera%20mas%20informacion%20sobre%20Marcador%20pizarra%20rojo%20punta%20fina%20Ofiart%20https://ibb.co/Dw6KhMC',
        flagOfertaLimitada: true
    },
    {
        id: 2,
        imagen: '/img/descuentobandejatresniveles.svg',
        titulo: 'Bandeja de 3 niveles color plata',
        precioAnterior: 23,
        precioNuevo: 16.10,
        url: 'https://api.whatsapp.com/send/?phone=584241376004&text=Hola%20Ym2%20papeleria%20quisiera%20mas%20informacion%20sobre%20bandeja%20tres%20niveles%20color%20plata%20https://ibb.co/8mBHSGx',
        flagOfertaLimitada: true
    },
    {
        id: 3,
        imagen: '/img/descuentoColoresAcuarelables.svg',
        titulo: 'Colores acurelables x12 + pincel Kores',
        precioAnterior: 8.50,
        precioNuevo: 5.95,
        url: 'https://api.whatsapp.com/send/?phone=584241376004&text=Hola%20Ym2%20papeleria%20quisiera%20mas%20informacion%20sobre%20Colores%20acurelables%20x12%20mas%20pincel%20Kores%20https://ibb.co/xG68mDH',
        flagOfertaLimitada: true
    },
];

export default function Index() {

    const [productosEnPromocion, setProductosEnPromocion] = useState(arrProductosEnPromocion);

    return (
        <Layout 
        title={'| Productos'}
        description={'Te ofrecemos productos de calidad'} 
        >        
            <HeaderParallaxBanner
                titulo={'Descuentos'} 
            />
            <ProductosEnPromocion
                productosDestacados={arrProductosEnPromocionSinVerMas}
            />

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 mb-14 mt-5 lg:mt-20">
            {                  
                productosEnPromocion.map(productoPromocionado =>(
                    <ProductoPromocionado
                        productoPromocionado={productoPromocionado}
                        key={productoPromocionado.id}
                    />
                ))
            }
            </div>
        </Layout>            
    )
}