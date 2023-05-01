import { useState } from "react";
import Layout from "@/components/layout"
import Image from "next/image";
import Link from "next/link";
import HeaderParallaxBanner from "@/components/headerParallaxBanner";
import ProductosEnPromocion from "@/components/productosEnPromocion";
import ProductoPromocionado from "@/components/productoPromocionado";

let arrProductosEnPromocion = 
[
    {"id":"1","imagen":"https://i.postimg.cc/nhPYHtNX/BOLIGRAFO-METRIX-AZUL-OFIMAK.png","titulo":"boligrafo azul metrix punta media ofimak","precioAnterior":"2.2","precioNuevo":"1.54","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20Bol�grafo%20azul%20metrix%20punta%20media%20Ofimak%20https://ibb.co/SwrJPzR","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"2","imagen":"https://i.postimg.cc/C1QV752F/BOLIGRAFO-METRIX-NEGRO-OFIMAK.png","titulo":"boligrafo negro metrix punta media ofimak","precioAnterior":"2.2","precioNuevo":"1.54","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20Bol�grafo%20negro%20metrix%20punta%20media%20Ofimak%20https://ibb.co/QvdVD9H","flagOfertaLimitada":"false","btnVermas":"false"}
    ,    
    {"id":"3","imagen":"/img/productoSinImagen.png","titulo":"bolso sport modern brush a1918","precioAnterior":"28","precioNuevo":"23.8","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20bolso%20sport%20modern%20brush%20a1918%20","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"5","imagen":"/img/productoSinImagen.png","titulo":"caja de regalo redonda roja grande","precioAnterior":"14","precioNuevo":"11.9","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20caja%20de%20regalo%20redonda%20roja%20grande%20","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"6","imagen":"/img/productoSinImagen.png","titulo":"caja de regalo redonda roja mediana","precioAnterior":"12","precioNuevo":"10.2","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20caja%20de%20regalo%20redonda%20roja%20mediana%20","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"7","imagen":"/img/productoSinImagen.png","titulo":"caja de regalo redonda roja pequeña","precioAnterior":"10","precioNuevo":"8.5","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20caja%20de%20regalo%20redonda%20roja%20peque�a%20","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"8","imagen":"/img/productoSinImagen.png","titulo":"caja de regalo roja cuadrada grande","precioAnterior":"12","precioNuevo":"10.2","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20caja%20de%20regalo%20roja%20cuadrada%20grande%20","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"9","imagen":"/img/productoSinImagen.png","titulo":"caja de regalo roja cuadrada pequeña","precioAnterior":"8","precioNuevo":"6.8","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20caja%20de%20regalo%20roja%20cuadrada%20peque�a%20","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"10","imagen":"/img/productoSinImagen.png","titulo":"caja de regalo set*3 flake boxes rojo redonda","precioAnterior":"34","precioNuevo":"28.9","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20caja%20de%20regalo%20set*3%20flake%20boxes%20rojo%20redonda%20","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"11","imagen":"/img/productoSinImagen.png","titulo":"caja de regalo set*3 take away rojo cuadrada","precioAnterior":"28","precioNuevo":"23.8","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20caja%20de%20regalo%20set*3%20take%20away%20rojo%20cuadrada%20","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"12","imagen":"/img/productoSinImagen.png","titulo":"cajas de regalos tic - tac grande 31*25*12cm oro","precioAnterior":"14","precioNuevo":"11.9","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20cajas%20de%20regalos%20tic%20tac%20grande%2031*25*12cm%20oro%20","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"13","imagen":"/img/productoSinImagen.png","titulo":"cajas de regalos tic - tac mediana 23*16*9cm oro","precioAnterior":"11","precioNuevo":"9.35","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20cajas%20de%20regalos%20tic%20tac%20mediana%2023*16*9cm%20oro%20","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"14","imagen":"/img/productoSinImagen.png","titulo":"cajas de regalos tic - tac pequeñas 18*10*7cm rojo","precioAnterior":"8","precioNuevo":"6.8","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20cajas%20de%20regalos%20tic%20tac%20peque�as%2018*10*7cm%20rojo%20","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"15","imagen":"/img/productoSinImagen.png","titulo":"cajas de regalos tic - tac vinera 10*10*34cm oro","precioAnterior":"9","precioNuevo":"7.65","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20cajas%20de%20regalos%20tic%20tac%20vinera%2010*10*34cm%20oro%20","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"16","imagen":"/img/productoSinImagen.png","titulo":"cajas de regalos tic - tac vinera 10*10*34cm rojo","precioAnterior":"9","precioNuevo":"7.65","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20cajas%20de%20regalos%20tic%20tac%20vinera%2010*10*34cm%20rojo%20","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"17","imagen":"/img/productoSinImagen.png","titulo":"cartera trendy fuscia - gris","precioAnterior":"7","precioNuevo":"5.6","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20cartera%20trendy%20fuscia%20gris%20","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"18","imagen":"/img/productoSinImagen.png","titulo":"cartera trendy verde - azul","precioAnterior":"7","precioNuevo":"5.6","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20cartera%20trendy%20verde%20azul%20","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"19","imagen":"/img/productoSinImagen.png","titulo":"cava canaima abstracto","precioAnterior":"32","precioNuevo":"28.8","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20cava%20canaima%20abstracto%20","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"20","imagen":"/img/productoSinImagen.png","titulo":"cava canaima camuflaje","precioAnterior":"32","precioNuevo":"28.8","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20cava%20canaima%20camuflaje%20","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"21","imagen":"/img/productoSinImagen.png","titulo":"cava canaima rayas","precioAnterior":"32","precioNuevo":"28.8","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20cava%20canaima%20rayas%20","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"22","imagen":"https://i.postimg.cc/SK2Nr8x3/1035054-CARTERA-RORAIMA-Photo-Room-png-Photo-Room.png","titulo":"cava cartera roraima cayenas","precioAnterior":"38","precioNuevo":"34.2","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20cava%20cartera%20roraima%20cayenas%20https://ibb.co/XjFwbjn","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"23","imagen":"https://i.postimg.cc/cLcJCZ5k/1035054-CARTERA-RORAIMA-1-Photo-Room-png-Photo-Room.png","titulo":"cava cartera roraima naranjas","precioAnterior":"38","precioNuevo":"34.2","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20cava%20cartera%20roraima%20naranjas%20https://ibb.co/ydRhdF0","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"24","imagen":"https://i.postimg.cc/c4R3Rpbw/1035054-CARTERA-RORAIMA-2-Photo-Room-png-Photo-Room.png","titulo":"cava cartera roraima tropical","precioAnterior":"38","precioNuevo":"34.2","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20cava%20cartera%20roraima%20tropical%20https://ibb.co/YDkRGhk","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"25","imagen":"/img/productoSinImagen.png","titulo":"cava marinero jaspe camo azul","precioAnterior":"27","precioNuevo":"24.3","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20cava%20marinero%20jaspe%20camo%20azul%20https://ibb.co/QDSqzj7","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"26","imagen":"https://i.postimg.cc/BZMTR9g3/1035059-BOLSO-MARINERO-JASPE-Photo-Room-png-Photo-Room.png","titulo":"cava marinero jaspe camuflaje","precioAnterior":"27","precioNuevo":"24.3","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20cava%20marinero%20jaspe%20camuflaje%20https://ibb.co/L5DPW3M","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"27","imagen":"https://i.postimg.cc/zf4zyB8N/1035060-BOLSO-MARINERO-JASPE-Photo-Room-png-Photo-Room.png","titulo":"cava marinero jaspe marino","precioAnterior":"27","precioNuevo":"24.3","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20cava%20marinero%20jaspe%20marino%20https://ibb.co/VtRBMp6","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"28","imagen":"https://i.postimg.cc/YSpT2BJ3/1035057-BOLSO-MARINERO-JASPE-Photo-Room-png-Photo-Room.png","titulo":"cava marinero jaspe tropical","precioAnterior":"27","precioNuevo":"24.3","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20cava%20marinero%20jaspe%20tropical%20https://ibb.co/hKbqZwm","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"30","imagen":"/img/productoSinImagen.png","titulo":"cava morral kavak tribu","precioAnterior":"63","precioNuevo":"56.7","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20cava%20morral%20kavak%20tribu%20https://ibb.co/QDSqzj7","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"31","imagen":"https://i.postimg.cc/gkjJJfPG/1035056-MORRAL-CAVA-MER-Photo-Room-png-Photo-Room.png","titulo":"cava morral meru","precioAnterior":"58","precioNuevo":"52.2","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20cava%20morral%20meru%20https://ibb.co/TvgV2tr","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"32","imagen":"https://i.postimg.cc/N0vqCZbH/DISPENSADOR-DE-CINTA-PLASTICA-OFIMAK.png","titulo":"dispensador de cinta plastica peq 3/4 (18mm)  negro","precioAnterior":"2.7","precioNuevo":"1.89","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20Dispensador%20de%20cinta%20pl�stica%20peq%20Ofimak%20https://ibb.co/MBYyvRY","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"33","imagen":"https://i.postimg.cc/1t6M0nQK/098487-ESTUCHE-ORINOCO-ZEBRA-Photo-Room-png-Photo-Room.png","titulo":"estuche orinoco zebra","precioAnterior":"6","precioNuevo":"4.8","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20estuche%20orinoco%20zebra%20https://ibb.co/3TTPj08","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"34","imagen":"https://i.postimg.cc/vTtsNKGc/098415-ESTUCHE-PROTECTOR-PARA-TABLET-EXODUS-NEGRO-Photo-Room-png-Photo-Room.png","titulo":"estuche protector para tablet exodus neg","precioAnterior":"10.44","precioNuevo":"8.352","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20estuche%20protector%20para%20tablet%20exodus%20neg%20https://ibb.co/Xx36cm8","flagOfertaLimitada":"false","btnVermas":"false"}
    ,    
    {"id":"36","imagen":"/img/productoSinImagen.png","titulo":"funda neopreno con bolsillo 10 exodus","precioAnterior":"9","precioNuevo":"8.1","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20funda%20neopreno%20con%20bolsillo%2010%20exodus%20","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"37","imagen":"https://i.postimg.cc/7ZL8kTj6/MARCADOR-DETECTOR-DE-BILLETES-FALSOS-MARCA-OFIMAK.png","titulo":"marcador detector de billetes falsos(3 und)","precioAnterior":"3","precioNuevo":"2","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20Marcador%20detector%20de%20billetes%20falsos%20https://ibb.co/QvdVD9H","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"38","imagen":"/img/descuentomarcadorpizarrablanca.svg","titulo":"marcador pizarra rojo punta fina ofiart","precioAnterior":"7.9","precioNuevo":"5.5","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20Marcador%20pizarra%20rojo%20punta%20fina%20Ofiart%20https://ibb.co/Dw6KhMC","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"39","imagen":"https://i.postimg.cc/YCYhKZF8/1084481-MINI-CARTERA-SAFARI-Photo-Room-png-Photo-Room.png","titulo":"mini cartera safary","precioAnterior":"6","precioNuevo":"4.8","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20mini%20cartera%20safary%20https://ibb.co/PmqQ4Gt","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"40","imagen":"https://i.postimg.cc/YqMdPbfP/ORGANIZADOR-DE-ESCRITORIO-PRINTA.png","titulo":"organizador de escritorio printa","precioAnterior":"8.5","precioNuevo":"5.95","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20organizador%20de%20escritorio%20printa%20https://https://ibb.co/2MwzRS3","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"41","imagen":"/img/productoSinImagen.png","titulo":"pintura acrilica  colores surtidos","precioAnterior":"1.4","precioNuevo":"1.26","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20pintura%20acrilica%20colores%20surtidos%20","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"42","imagen":"https://i.postimg.cc/52fvNfmj/PINTURA-ACRILICA-40-ML-SYSABE-Photo-Room-png-Photo-Room.png","titulo":"pintura acrilica oro 40ml sysabe","precioAnterior":"2.4","precioNuevo":"2.16","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20pintura%20acrilica%20oro%2040ml%20sysabe%20https://ibb.co/D4sm5Wr","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"43","imagen":"/img/productoSinImagen.png","titulo":"pintura acrilica verde limom 40ml sysabe","precioAnterior":"1.4","precioNuevo":"1.26","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20pintura%20acrilica%20verde%20limom%2040ml%20sysabe%20","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"44","imagen":"/img/productoSinImagen.png","titulo":"pintura acrilica verde pasto 40ml sysabe","precioAnterior":"1.4","precioNuevo":"1.26","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20pintura%20acrilica%20verde%20pasto%2040ml%20sysabe%20","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"45","imagen":"https://i.postimg.cc/mkP93KCW/098645-SET-DE-ESTUCHES-EXODUS-ANIMAL-PRINT-Photo-Room-png-Photo-Room.png","titulo":"set de estuches exodus animal print","precioAnterior":"5","precioNuevo":"4","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20set%20de%20estuches%20exodus%20animal%20print%20https://ibb.co/zJmL73D","flagOfertaLimitada":"false","btnVermas":"false"}
    ,
    {"id":"46","imagen":"https://i.postimg.cc/QtBJ8BC3/098644-SET-DE-ESTUCHES-EXODUS-ZEBRA-Photo-Room-png-Photo-Room.png","titulo":"set de estuches exodus zebra","precioAnterior":"5","precioNuevo":"4","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20set%20de%20estuches%20exodus%20zebra%20https://ibb.co/K5b6Jzd","flagOfertaLimitada":"false","btnVermas":"false"}
    
    ];

let arrProductosEnPromocionSinVerMas = [
    {"id":"35","imagen":"https://i.postimg.cc/0jgfQpzs/098679-ESTUCHE-TRIANGULAR-SAFARI-EXODUS-A19-Photo-Room-png-Photo-Room.png","titulo":"estuche triangular safari exodus a19","precioAnterior":"8","precioNuevo":"6.8","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20estuche%20triangular%20safari%20exodus%20a19%20https://ibb.co/8smQ7v1",flagOfertaLimitada:true, btnVermas: true}
    ,    
    {"id":"29","imagen":"https://i.postimg.cc/htQgHdkB/1035061-MORRAL-CAVA-KAVAK-Photo-Room-png-Photo-Room.png","titulo":"cava morral kavak relax","precioAnterior":"63","precioNuevo":"56.7","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20cava%20morral%20kavak%20relax%20https://ibb.co/drM7DDQ",flagOfertaLimitada:true, btnVermas: true}
    ,
    {"id":"4","imagen":"https://i.postimg.cc/PqG0g8MB/098677-BOLSO-SPORT-SAFARI-EXODUS-A1918-Photo-Room-png-Photo-Room.png","titulo":"bolso sport safari exodus a1918","precioAnterior":"28","precioNuevo":"23.8","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20bolso%20sport%20safari%20exodus%20a1918%20https://ibb.co/0MMCMNb",flagOfertaLimitada:true, btnVermas: true}
    ,
];

export default function Index() {

    const [productosEnPromocion, setProductosEnPromocion] = useState(arrProductosEnPromocion);

    return (
        <Layout 
        title={'| Productos con descuentos'}
        description={'Obten los mejores descuentos del mercado'} 
        >        
            <HeaderParallaxBanner
                titulo={'Descuentos'} 
            />
            <ProductosEnPromocion
                productosDestacados={arrProductosEnPromocionSinVerMas}
            />

            <div className="mx-5 grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14 mt-5 lg:mt-20">
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