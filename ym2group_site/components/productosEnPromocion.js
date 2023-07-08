import { useState, useEffect } from "react";
import Link from "next/link"
import { useRouter } from "next/router";
import ProductoPromocionado from "./productoPromocionado";

let arrProductosEnPromocion = [
    {"id":"35","imagen":"https://i.postimg.cc/0jgfQpzs/098679-ESTUCHE-TRIANGULAR-SAFARI-EXODUS-A19-Photo-Room-png-Photo-Room.png","titulo":"estuche triangular safari exodus a19","precioAnterior":"8","precioNuevo":"6.8","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papelería%20quisiera%20mas%20información%20sobre%20estuche%20triangular%20safari%20exodus%20a19%20https://ibb.co/8smQ7v1",flagOfertaLimitada:false, btnVermas: true}
    ,    
    {"id":"29","imagen":"https://i.postimg.cc/htQgHdkB/1035061-MORRAL-CAVA-KAVAK-Photo-Room-png-Photo-Room.png","titulo":"cava morral kavak relax","precioAnterior":"63","precioNuevo":"56.7","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papelería%20quisiera%20mas%20información%20sobre%20cava%20morral%20kavak%20relax%20https://ibb.co/drM7DDQ",flagOfertaLimitada:true, btnVermas: true}
    ,
    {"id":"4","imagen":"https://i.postimg.cc/PqG0g8MB/098677-BOLSO-SPORT-SAFARI-EXODUS-A1918-Photo-Room-png-Photo-Room.png","titulo":"bolso sport safari exodus a1918","precioAnterior":"28","precioNuevo":"23.8","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papelería%20quisiera%20mas%20información%20sobre%20bolso%20sport%20safari%20exodus%20a1918%20https://ibb.co/0MMCMNb",flagOfertaLimitada:false, btnVermas: true}
    ,
    {"id":"34","imagen":"https://i.postimg.cc/vTtsNKGc/098415-ESTUCHE-PROTECTOR-PARA-TABLET-EXODUS-NEGRO-Photo-Room-png-Photo-Room.png","titulo":"estuche protector para tablet exodus neg","precioAnterior":"10.44","precioNuevo":"8.352","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papelería%20quisiera%20mas%20información%20sobre%20estuche%20protector%20para%20tablet%20exodus%20neg%20https://ibb.co/Xx36cm8",flagOfertaLimitada:true, btnVermas: true}
    ,    
    {"id":"36","imagen":"https://i.postimg.cc/T1VV3fCc/Funda-Neopreno-con-Bolsillo-10-Exodus.jpg","titulo":"funda neopreno con bolsillo 10 exodus","precioAnterior":"9","precioNuevo":"8.1","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20información%20sobre%20funda%20neopreno%20con%20bolsillo%2010%20exodus%20https://ibb.co/G7jSmr7",flagOfertaLimitada:false, btnVermas: true}
    ,
    {"id":"46","imagen":"https://i.postimg.cc/QtBJ8BC3/098644-SET-DE-ESTUCHES-EXODUS-ZEBRA-Photo-Room-png-Photo-Room.png","titulo":"set de estuches exodus zebra","precioAnterior":"5","precioNuevo":"4","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papelería%20quisiera%20mas%20información%20sobre%20set%20de%20estuches%20exodus%20zebra%20https://ibb.co/K5b6Jzd",flagOfertaLimitada:false, btnVermas: true}
    ,
];

export default function ProductosEnPromocion({productosDestacados}) {

    const router = useRouter();
    const verMasHidden = router.asPath === '/productos/descuento' ? true : false;
    const [productosEnPromocion, setProductosEnPromocion] = useState(arrProductosEnPromocion);

    useEffect(() => {
        if(productosDestacados)
            setProductosEnPromocion(productosDestacados)
    }, [])
    
    

    return (
        <>
            {productosEnPromocion.length ? (
            <div className="grid grid-cols-1 mb-14 mt-5 lg:mt-20">
                <div className="block xl:grid grid-cols-3 gap-5 container mx-auto mb-8">
                    <div className="mx-auto py-5 text-blue-700">
                        <h2 className="grid justify-items-center text-2xl text-center">Ahorrar dinero en tus<strong className="font-medium text-4xl">compras online</strong></h2>                
                    </div>
                    <div className="mx-auto py-5 text-blue-700 text-center">
                        <h2 className="lg:block grid justify-items-center text-2xl font-medium"><strong className="block font-bold text-4xl text-orange-500">Descuento hasta 33%</strong>en artículos destacados</h2>              
                        <h3 className="block grid justify-items-center text-xl mt-3 lg:mt-0 text-center">al comprar desde nuestro sitio web</h3> 
                        {/* <h3 className="block grid justify-items-center text-1xl mt-3 lg:mt-0 text-center"> - válido hasta el 30 de abril - </h3>  */}
                    </div>
                    <div className="mx-auto py-5 flex justify-center xl:block">
                        <span className="text-2xl rounded-3xl lg:mt-3 text-white bg-blue-700 px-4 py-2">¡Por tiempo limitado!</span>                
                    </div>
                </div>
                <div className="grid grid-cols-2 xl:grid-cols-3 gap-0 md:gap-3 m-5 md:mx-0 rounded-2xl shadow-lg md:shadow-none ">
                    <div className="col-span-2 md:col-span-3 flex place-content-between p-5 border-b-2 md:border-2 rounded-2xl border-slate-200">
                        <span className="text-xl font-semibold">Destacados</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                        </svg>
                    </div>
                    {   
                        productosEnPromocion.map(productoPromocionado =>(
                            <ProductoPromocionado
                                productoPromocionado={productoPromocionado}
                                key={productoPromocionado.id}
                            />
                        ))
                    }
                    {!verMasHidden &&(
                        <Link 
                            href="/productos/descuento" 
                            className="col-span-2 md:col-span-3 flex place-content-between p-5 border-b-2 md:border-2 rounded-2xl border-slate-200 leading-snug transition duration-150 ease-in-out hover:bg-slate-50 hover:text-blue-500 focus:text-neutral-700"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                        >
                            <span className="text-lg font-medium text-blue-700">Ver más</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-lg font-medium w-6 h-6 text-blue-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </Link>
                    )}
                </div>
            </div>
            ) : (
                <p className=" text-center mt-10">No hay productos en promoción aún</p>
            )}
        </>
    )
}